import React, { useState } from "react";
import "./css/main.css";
import "./css/util.css";
import "./images/icons/favicon.ico";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import background from './images/bg-01.jpg';
import axios from "axios";

export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});

//   let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = `/home`; 
//     navigate(path);
//   }

  //get user login info from database

  const data = async() => {await(axios.get("/getUsers"))};

  const errors = {
    email: "invalid email",
    pass: "invalid password"
  };


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.filter((user) => user.email === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // routeChange();
      }
    } else {
      // email not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


 return (
    <div class="limiter">
    <div class="container-login100" style={{backgroundImage: `url(${background})`}}>
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form class="login100-form validate-form" onSubmit = {handleSubmit}>
                <span class="login100-form-title p-b-49">
                    Bug Tracker Login
                </span>

                <div class="wrap-input100 validate-input m-b-23" data-validate = "email is reauired">
                    <span class="label-input100">Email</span>
                    <input class="input100" type="text" name="email" placeholder="Type your email"/>
                    {renderErrorMessage("uname")}
                    <span class="focus-input100" data-symbol="&#xf206;"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <span class="label-input100">Password</span>
                    <input class="input100" type="password" name="pass" placeholder="Type your password"/>
                    {renderErrorMessage("pass")}
                    <span class="focus-input100" data-symbol="&#xf190;"></span>
                </div>
                
                {/* <div class="text-right p-t-8 p-b-31">
                    <a href="#">
                        Forgot password?
                    </a>
                </div> */}
                
                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn m-t-50">
                        <div class="login100-form-bgbtn"></div>
                        <button class="login100-form-btn">
                            Login 
                        </button>
                    </div>
                </div>


                <div class="flex-col-c m-t-50">
                    <a href="/signup" class="txt2">
                        Sign Up 
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
  );


}

