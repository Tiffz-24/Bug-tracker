import './css/App.css';
import React from "react";
import Login from './Login';
import Signup from "./Signup";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login}></Route>
        <Route exact path = "/signup" component = {Signup}></Route>
        <Route path = "/home" component = {Sidebar}></Route>
        {/* <Route path = "/projects" component = {Projects}></Route>
        <Route path = "/profile" component = {Profile}></Route>  */}
      </Switch>
    </Router>
  );
}

