import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/style.css";

export default function Home(id){

    // const [Name, setErrorMessages] = useState({});
    var name = "Tiffany";
    //input id as parameter for get request
    // componentDidMount(){
    //     Promise.all([
    //         axios.get('/getFirstName/' + id),      
    //         axios.get('/getInfo')
    //     ]).then(([res1, res2]) => {
    //             name = res1.data;
    //             })
    // }

    return(
        <div id = "tab">
        <header>Welcome, {name}!</header>
        </div>

    );
}