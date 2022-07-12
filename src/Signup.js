import React, {useState} from "react";
import axios from "axios";
import "./css/main.css";
import "./css/util.css";
import "./images/icons/favicon.ico";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import background from './images/bg-01.jpg';
import Form from 'react-bootstrap/Form';

export default function Signup(){

    const [newEmail, setNewEmail] = useState([""]);
    const [newFirstName, setNewFirstName] = useState([""]);
    const [newLastName, setNewLastName] = useState([""]);
    const [newPassword, setNewPassword] = useState([""]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const result = axios.post('/users', {
                email: newEmail,
                first_name: newFirstName,
                last_name: newLastName,
                password: newPassword
            });
            setNewEmail("");
            setNewFirstName("");
            setNewLastName("");
            setNewPassword("");
        }
        catch(e){
            console.log(e);
    
        }
    }

    return (
        <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <Form className="login100-form validate-form">
                    <span className="login100-form-title p-b-49">
                        Bug Tracker Signup
                    </span>
    
                    <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is required">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="text" name="email" placeholder="Type your email"  onChange={e => setNewEmail(e.target.value)}/>
                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                    </div>
    

                    <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                        <span className="label-input100">First Name</span>
                        <input className="input100" type="text" name="firstname" placeholder="Type your first name"  onChange={e => setNewFirstName(e.target.value)}/>
                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                        <span className="label-input100">Last Name</span>
                        <input className="input100" type="text" name="lastname" placeholder="Type your last name"  onChange={e => setNewLastName(e.target.value)}/>
                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <span className="label-input100">Password</span>
                        <input className="input100" type="password" name="pass" placeholder="Type your password"  onChange={e => setNewPassword(e.target.value)}/>
                        <span className="focus-input100" data-symbol="&#xf190;"></span>
                    </div>
                    
                    {/* <div className="text-right p-t-8 p-b-31">
                        <a href="#">
                            Forgot password?
                        </a>
                    </div> */}
                    
                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn m-t-50">
                            <div className="login100-form-bgbtn"></div>
                            <button className="login100-form-btn" onClick={handleSubmit}>
                            Sign Up 
                            </button>
                        </div>
                    </div>
    
                    <div className="flex-col-c m-t-50">
                    <a href="/" className="txt2">
                        Back to Login
                    </a>
                    </div>

                </Form>
            </div>
        </div>
    </div>
      );
}