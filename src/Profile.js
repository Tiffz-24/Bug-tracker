import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/style.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Profile(userId=1){
    //set below to current email and password
    const[newPassword, setNewPassword] = useState(null);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [data, setData] = useState(null);

    // useEffect(() => {

    //     const getData = async() => {
    //         try{
    //             const result = await axios.get('/projects');
    //             setData(result.data.response);
    //             setReadyForRender(true);
    //         }
    //         catch(e){
    //             console.log(e);

    //         }
    //     }
    //     getData();
    //   }, []);
    
    const handleSubmit = async() => {
        try{
            const result = await axios.put('/user/' + userId, {
                password: newPassword
            });
            
        }
        catch(e){
            console.log(e);

        }

    }
    
    const UserInfo = () => {
        return(
            <>
            <Form className = "Form mt-3" id = "myForm">
                <Form.Group controlId="formFile">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type = "text" value = "First Name" disabled />
                </Form.Group>

                <Form.Group controlId="formFile">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type = "text" value = "Last Name" disabled />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value = "Email" disabled/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value = "password" disabled/>
                    <Button className = "mt-3" onClick={() => setOpen(o => !o)}>Change Password</Button> 
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <form id="myform" onSubmit = {handleSubmit}>
                            <input type="textbox" id="field" required onChange = {(e) => {setNewPassword(e.target.value)}}/>
                            <input type="submit" value="submit"/>
                        </form>
                    </Popup>
                </Form.Group>
                
            </Form>
            </>
            );
        };
    // const name = "First Name";
    return(
        <div id = "tab">
            <header>Profile</header>
            <div>
               {UserInfo()}
            </div>
        </div>
    );
}
