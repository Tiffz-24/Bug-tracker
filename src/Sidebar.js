import React, {useState, useEffect} from "react";
import "./css/style.css";
import Home from "./Home";
import ProjectHome from "./ProjectHome";
import Profile from "./Profile";
import About from "./About";


export default function Sidebar() {
    const [tab, setTab] = useState("home");
    useEffect(() => {
       
      });

    const sidebar = (
        <div>
        <nav id="sidebar">
    
                    <div className="p-4 pt-5 pb-20">
                            <h1><a className="logo">Bug Tracker</a></h1>
                        <ul className="list-unstyled components mb-5">
    
                        <li>
                            <a href = "/home" onClick = {() => setTab("home")}
                            style = {{color: tab === "home" ? "#fff" : "rgba(255, 255, 255, 0.8)", 
                                      fontWeight: tab === "home" ? "600" : "500"}}>Home</a>
                        </li>
    
                        <li>
                            <a onClick = {() => setTab("projects")}
                            style = {{color: tab === "projects" ? "#fff" : "rgba(255, 255, 255, 0.8)",
                                      fontWeight: tab === "projects" ? "600" : "500"}}>Projects</a>
                        </li>
    
                        <li>
                        <a onClick = {() => setTab("profile")}
                            style = {{color: tab === "profile" ? "#fff" : "rgba(255, 255, 255, 0.8)",
                                      fontWeight: tab === "profile" ? "600" : "500"}}>Profile</a>
                    
                        </li>
    
                        <li>
                        <a onClick = {() => setTab("about")}
                            style = {{color: tab === "about" ? "#fff" : "rgba(255, 255, 255, 0.8)",
                                      fontWeight: tab === "about" ? "600" : "500"}}>About</a>
                        </li>
    
                        <li>
                        <a>Sign Out</a>
                        </li>
                </ul>
    
              </div>
            </nav>
            </div>
    );

    return(
        <div className = "flex-row">
            
            {sidebar}
            {tab === "home" && <Home/>}
            {tab === "projects" && <ProjectHome/>}
            {tab === "profile" && <Profile/>}
            {tab === "about" && <About/>}

		</div>
 

    );
}