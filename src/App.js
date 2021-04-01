import React, { useState } from "react";
import { Container ,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
function App() {
  const [taskType, setTaskType] = useState([
    {name:'abe'}, {name:'fsd'}, {name:'abdsfssde'},
  ]);
  //localStorage.setItem("lastname", JSON.stringify(taskType));
  //let separte = localStorage.getItem("lastname").split('][')
  console.log(JSON.parse(localStorage.getItem("lastname")))
  return (
    <div className="App">
      <Container>{taskType.map((type)=>(<h1>{type.name}</h1>))}
      <Button onClick={(e)=>{e.preventDefault(); setTaskType(prevtype =>([...prevtype , {name:'new type'}]));  localStorage.setItem("lastname", JSON.stringify(taskType));} } variant="contained" color="primary">Add new</Button>
      </Container>
    </div>
  );
}

export default App;
