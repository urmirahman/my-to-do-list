import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { IncompleteTask } from '../components/IncompleteTask';
import { InputText } from '../components/InputText';

export const Home = () => {
    let value = JSON.parse(localStorage.getItem("tasklist")) === null ? [] : JSON.parse(localStorage.getItem("tasklist"))
    const [state, setState] = useState(value);

    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(state));
        //console.log(value)
      
         console.log(JSON.parse(localStorage.getItem("tasklist")))
        console.log(state.length);
      }, [state]);

    const handlekey = (e) => {
        let temp = e.target.value
        if(e.key === "Enter"){
            setState((old) => [...old, { name: temp }])
            console.log(state);
        }
        
    };
    const handleremove = (e) => {
        e.preventDefault();
       localStorage.removeItem("tasklist")
       let p = []
       setState(p)
      };
    return (
        <div>
            <InputText  onkeydown={handlekey}/>
            {state.length > 0 && state.map(data=>(<div><IncompleteTask taskname={data.name}/></div>))}
           <Button onClick={handleremove} variant="contained" color="secondary">remove</Button>
        </div>
    )
}
