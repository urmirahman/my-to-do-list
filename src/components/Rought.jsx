import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
export const Rought = () => {
 
let value = JSON.parse(localStorage.getItem("p")) === null ? [{name:"firstvalue"}] : JSON.parse(localStorage.getItem("p"))
  const [test, settest] = useState(value);


  let temo = []
  useEffect(() => {
    
    
    let localstorage = JSON.parse(localStorage.getItem("tasks"));
    if (localstorage.length < test.length) {
      localStorage.setItem("p", JSON.stringify(test));
      temo = JSON.parse(localStorage.getItem("p"))
    }
    console.log(value)
    console.log(localstorage);
     console.log(JSON.parse(localStorage.getItem("p")))
    console.log(test);
  }, [test]);

  const handleClick = (e) => {
    e.preventDefault();
    settest((old) => [...old, { name: "hey" }])
   localStorage.setItem("tasks", JSON.stringify(test));
  };

  const handleremove = (e) => {
    e.preventDefault();
   localStorage.removeItem("p")
    console.log(localStorage)
   let p = [{name:"new"},]
  //  localStorage.setItem("p", JSON.stringify(p));
  //  console.log(JSON.parse(localStorage.getItem("p")))
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
