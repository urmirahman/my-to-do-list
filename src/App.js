import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
function App() {
  const [taskType, setTaskType] = useState([{ name: "" }]);
  console.log(JSON.parse(localStorage.getItem("lastname")));
let length_local = JSON.parse(localStorage.getItem("lastname")).length;
 let test = [{name:'hello'},{name:"world"}]
 let arrayLenght= test.length
 
 if(length_local > arrayLenght){
   test = JSON.parse(localStorage.getItem("lastname"))
 }
 console.log(test)
  return (
    <div className="App">
      <Container>
        {test.map((type) => (
          <h1>{type.name}</h1>
        ))}
        <Button
          onClick={(e) => {
            e.preventDefault();
           test.push({name:"newworld"});
           console.log(test)
            localStorage.setItem("lastname", JSON.stringify(test));
          }}
          variant="contained"
          color="primary"
        >
          Add new
        </Button>
      </Container>
    </div>
  );
}

export default App;
