import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { IncompleteTask } from '../components/IncompleteTask';
import { InputText } from '../components/InputText';

export const Home = () => {
    let value = JSON.parse(localStorage.getItem("tasklist")) === null ? [] : JSON.parse(localStorage.getItem("tasklist"))
    let value2 = JSON.parse(localStorage.getItem("completeTask")) === null ? [] : JSON.parse(localStorage.getItem("completeTask"))
    const [incompleteTask, setIncompleteTask] = useState(value);
    const [completeTask, setCompleteTask] = useState(value2);
   
    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(incompleteTask));
        //console.log(value)
        localStorage.setItem("completeTask", JSON.stringify(completeTask));
        console.log(completeTask)
         console.log(JSON.parse(localStorage.getItem("tasklist")))
        //console.log(incompleteTask.length);
      }, [incompleteTask,completeTask]);

      const AddComplteTask = (taskname,index) => {
        setCompleteTask((old) => [...old , { name: taskname }]);
        incompleteTask.splice(index,1)
       // console.log(incompleteTask)
      };
    
    const handlekey = (e) => {
        let temp = e.target.value
        if(e.key === "Enter"){
            setIncompleteTask((old) => [...old, { name: temp }])
            console.log(incompleteTask);
        }
        
    };
    const handleremove = (e) => {
        e.preventDefault();
    //    localStorage.removeItem("tasklist")
       let p = []
       setCompleteTask(p)
      };


    return (
        <div>
            <InputText  onkeydown={handlekey}/>
            {incompleteTask.length > 0 && incompleteTask.map((data,index)=>(<div key={index}><IncompleteTask AddComplteTask={()=>AddComplteTask(data.name,index)} taskname={data.name}/></div>))}
           <Button onClick={handleremove} variant="contained" color="secondary">remove</Button>
        </div>
    )
}
