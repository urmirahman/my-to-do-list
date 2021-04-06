import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
function App() {
  const [taskType, setTaskType] = useState([
    { name: "abe" },
    { name: "fsd" },
    { name: "abdsfssde" },
  ]);
  const [test, settest] = useState([]);
  let a = JSON.parse(localStorage.getItem("lastname")).lengh;
  let b = taskType.length;
  if (b > a) {
    localStorage.setItem("lastname", JSON.stringify(taskType));
    setTaskType(localStorage.setItem("lastname", JSON.stringify(taskType)));
  }
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("lastname")).lengh;
    let b = taskType.length;
    if (b > a) {
      localStorage.setItem("lastname", JSON.stringify(taskType));
      setTaskType(localStorage.setItem("lastname", JSON.stringify(taskType)));
    }
    // setTaskType(JSON.parse(localStorage.getItem("lastname")));
    console.log("from array");
    console.log(taskType);
    console.log("from Localstorage");
    console.log(JSON.parse(localStorage.getItem("lastname")));
  }, [taskType]);

  const handleClick = (e) => {
    e.preventDefault();

    console.log("from array in handeclick");
    console.log(taskType);
    setTaskType((prevtype) => [...prevtype, { name: "new type" }]);

    localStorage.setItem("lastname", JSON.stringify(taskType));
    console.log("from array handeclick");
    console.log(taskType);
    console.log("from Localstorage handeclick");
    console.log(JSON.parse(localStorage.getItem("lastname")));
  };

  return (
    <div className="App">
      <Container>
        {taskType.map((type) => (
          <h1>{type.name}</h1>
        ))}
        {/* {test.map((data) => (
          <h1>{data}</h1>
        ))} */}
        <Button onClick={handleClick} variant="contained" color="primary">
          Add new
        </Button>
      </Container>
    </div>
  );
}

export default App;
