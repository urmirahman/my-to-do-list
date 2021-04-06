import React, { useState, useEffect } from "react";
import { IncompleteTask } from '../components/IncompleteTask';
import { InputText } from '../components/InputText';

export const Home = () => {
    let value = JSON.parse(localStorage.getItem("tasklist")) === null ? [{name:""}] : JSON.parse(localStorage.getItem("tasklist"))
    const [state, setState] = useState(value);

    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(state));
        //console.log(value)
      
         console.log(JSON.parse(localStorage.getItem("tasklist")))
        console.log(state);
      }, [state]);

    const handlekey = (e) => {
        let temp = e.target.value
        if(e.key === "Enter"){
            setState((old) => [...old, { name: temp }])
            console.log(state);
        }
        
    };
    const handleChnage = (e) => {
     // setState(e.target.value);
      console.log("onshnage");
    };
    return (
        <div>
            <InputText  onkeydown={handlekey}/>
            {state.map(data=>(<div><IncompleteTask/></div>))}
           
        </div>
    )
}
