import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/style.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card"

export default function Project(props){

    const [readyForRender, setReadyForRender] = useState(false);
    const [bugData, setBugData] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [open, setOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);

    const [newName, setNewName] = useState([""]);
    const [newPriority, setNewPriority] = useState([""]);
    const [newNotes, setNewNotes] = useState([""]);

    useEffect(() => {

        const getData = async() => {
            try{
                const result = await axios.get('/bugs/' + props.id);
                setBugData(result.data.response);
                setReadyForRender(true);
            }
            catch(e){
                console.log(e);

            }
        }
        getData();
      }, []);

 

    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
        try{
            const result = axios.post('/bugs', {
                bug_name: newName,
                project_id: props.id,
                status: "in progress",
                priority: newPriority,
                notes: newNotes
            });
            setNewName("");
            setNewPriority("");
            setNewNotes("");
        }
        catch(e){
            console.log(e);
    
        }
    }

    const form = () =>{
        return(
            <Form className = "Form mt-3" id = "myForm" onSubmit={handleSubmit}>
                <Form.Group controlId="formFile">
                    <Form.Label>Bug Name</Form.Label>
                    <Form.Control type = "text" onChange={e => setNewName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formFile">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control type = "text" onChange={e => setNewPriority(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" onChange={e => setNewNotes(e.target.value)}/>
                </Form.Group>

                
                <Button className = "mt-5" variant="primary" type="submit" form="myForm">
                    Submit Changes
                </Button>
            </Form>
        );
    }


    const closeModal = () => setOpen(false);

    const changeProjStatus = () =>{
        if(props.status === "in progress"){
            try{
                const result = axios.put('/projects/' + props.id, {status: "completed"});
            }
            catch(e){
                console.log(e);

            }
        }

        else{
            try{
                const result = axios.put('/projects/' + props.id, {status: "in progress"});
            }
            catch(e){
                console.log(e);

            }
        }
    }

    const changeBugStatus = (status, bug_id) =>{
        if(status === "in progress"){
            try{
                const result = axios.put('/bugs/' + bug_id, {status: "solved"});
            }
            catch(e){
                console.log(e);

            }
        }

        else{
            try{
                const result = axios.put('/bugs/' + bug_id, {status: "in progress"});
            }
            catch(e){
                console.log(e);

            }
        }
    }

    const changeBugPriority = (newPriority, bug_id) =>{
        if(newPriority != bugData.priority){
            try{
                const result = axios.put('/bugs/' + bug_id, {priority: newPriority});
            }
            catch(e){
                console.log(e);
    
            }
        }
    }

    const changeNotes = (bug_id) =>{
        try{
            const result = axios.put('/bugs/' + bug_id, {notes: newNotes});
        }
        catch(e){
            console.log(e);

        }
    }

    const bugInfo = (data) => {
        return(
            <Card className = "project" key={data.bug_id}>
                <Card.Body style = {{display:"flex", flexDirection: "row", flexGrow:1, width: "100%", justifyContent:"space-between"}}>
                    <Card.Title>{data.bug_name}</Card.Title>
                    <Card.Text onClick = {() => changeBugStatus(data.status, data.bug_id)}>
                   {data.status}
                    </Card.Text>
                    <Card.Text>
                        <button type="button" className="button" onClick={() => setNotesOpen(o => !o)}>
                            see notes
                        </button>
                        <Popup open={notesOpen}>
                        <Form onSubmit = {changeNotes(data.bug_id)}>
                            <Form.Group controlId="formFile">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control type = "text" onChange={e => setNewNotes(e.target.value)} placeholder = {data.notes}/>
                                <Button style = {{marginTop:"10px"}} type = "submit">Save</Button>
                            </Form.Group>
                        </Form>
                        </Popup>
                    </Card.Text>
                    <Dropdown> 
                            <Dropdown.Toggle variant="info">
                            {data.priority}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick = {() => changeBugPriority("low", data.bug_id)}>Low</Dropdown.Item>
                                <Dropdown.Item onClick = {() => changeBugPriority("medium", data.bug_id)}>Medium</Dropdown.Item>
                                <Dropdown.Item onClick = {() => changeBugPriority("high", data.bug_id)}>High</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Card.Body>
            </Card>
        );
    };

    return(
        <div id = "tab">
            <header>{props.name}</header> 
            <Button style = {{display: "block", margin: "20px auto"}} onClick = {changeProjStatus}>{props.status === "in progress"? "set to completed" : "set to in progress"}</Button>
            {readyForRender &&
            <div style = {{display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
                {Object.values(bugData).map(a => bugInfo(a)) }
            </div>
            }

            <button type="button" className="button center" onClick={() => setOpen(o => !o)}>
                 Add new bug
            </button>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                {form}
            </Popup>

        </div>
    );
}