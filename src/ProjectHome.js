import React, {useState, useEffect} from "react";
import axios from "axios";
import Project from "./Project";
import "./css/style.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Card from "react-bootstrap/Card"

export default function ProjectHome(id){
    const [readyForRender, setReadyForRender] = useState(false);
    const [data, setData] = useState([]);
    const [projSelected, setProjSelected] = useState(null);
    const [selectedProj, newSelectedProj] = useState(false);
    const [newProjName, setNewProjName] = useState("");

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);


    useEffect(() => {

        const getData = async() => {
            try{
                const result = await axios.get('/projects');
                setData(result.data.response);
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
            const result = axios.post('/projects/' + newProjName);
            setNewProjName("");
        }
        catch(e){
            console.log(e);
    
        }

}

    const projectInfo = (data) => {
        return(
            <Card className = "project" style={{ width: '18rem' }} onClick = {() => setProjSelected(data)}>
                <Card.Body>
                    <Card.Title>{data.project_name}</Card.Title>
                    <Card.Text>
                   {data.status}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    

    return(
        <div id = "tab">
            {readyForRender && (projSelected === null) &&
            <div>
                <header>Projects</header>
                <div style = {{display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
                    {Object.values(data).map(a => projectInfo(a)) }
                    <button type="button" className="button" onClick={() => setOpen(o => !o)}>
                        Add new project
                    </button>
                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <form id="myform" onSubmit = {handleSubmit}>
                            <input type="textbox" id="field" required onChange = {(e) => {setNewProjName(e.target.value)}}/>
                            <input type="submit" value="submit"/>
                        </form>
                    </Popup>
                </div>
            </div>

            
            }

            {(projSelected != null) &&
                <Project 
                id = {projSelected.project_id}
                name = {projSelected.project_name}
                status = {projSelected.status}/>
            }

            
        </div>

    );
}