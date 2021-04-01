import React, { useState,useEffect } from "react";
import { Container ,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
function App() {
  const [taskType, setTaskType] = useState([
    {name:'abe'}, {name:'fsd'}, {name:'abdsfssde'},
  ]);
  console.log(JSON.parse(localStorage.getItem("lastname")))
  useEffect(()=>{
    let localLength = JSON.parse(localStorage.getItem("lastname")).length
    let taskLength = taskType.length
    if(localStorage !== taskLength){
      setTaskType(JSON.parse(localStorage.getItem("lastname")))
    }
  },[])
  
  return (
    <div className="App">
      <Container>{taskType.map((type)=>(<h1>{type.name}</h1>))}
      <Button onClick={(e)=>{e.preventDefault(); setTaskType(prevtype =>([...prevtype , {name:'new type'}]));  localStorage.setItem("lastname", JSON.stringify(taskType));} } variant="contained" color="primary">Add new</Button>
      </Container>
    </div>
  );
}

export default App;
