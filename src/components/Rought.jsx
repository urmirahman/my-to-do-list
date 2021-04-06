import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
export const Rought = () => {
 
let value = JSON.parse(localStorage.getItem("tasklist")) === null ? [{name:"firstitem"}] : JSON.parse(localStorage.getItem("tasklist"))
  const [test, settest] = useState(value);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(test));
    console.log(value)
  
     console.log(JSON.parse(localStorage.getItem("tasklist")))
    console.log(test);
  }, [test]);

  const handleClick = (e) => {
    e.preventDefault();
    settest((old) => [...old, { name: "hey" }])
   
  };

  const handleremove = (e) => {
    e.preventDefault();
   localStorage.removeItem("tasklist")
   let p = [{name:"new "},]
   settest(p)
  };
  return (
    <div className="App">
      <Container>
        {test.map((data) => (
          <h1>{data.name}</h1>
        ))}
        <Button onClick={handleClick} variant="contained" color="primary">
          Add new
        </Button>
        <Button onClick={handleremove} variant="contained" color="secondary">
          remove
        </Button>
      </Container>
    </div>
  );
};
