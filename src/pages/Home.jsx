import { Box, Button, Divider, Chip, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { IncompleteTask } from "../components/IncompleteTask";
import { CompletedTask } from "../components/CompletedTask";
import { InputText } from "../components/InputText";
import { useStylesHome } from "../styledComponent/StyledComponent";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import DoneAllIcon from "@material-ui/icons/DoneAll";

export const Home = () => {
  const classes = useStylesHome();

  let value =
    localStorage.getItem("tasklist") === null
      ? [{name:"[Others] add your first to-do",type:"Others"},
      {name:"[Design] Design your first app",type:"Design"}]
      : JSON.parse(localStorage.getItem("tasklist"));
  let value2 =
    JSON.parse(localStorage.getItem("completeTask")) === null
      ? []
      : JSON.parse(localStorage.getItem("completeTask"));

  let recyletasks =
    JSON.parse(localStorage.getItem("recycletasks")) === null
      ? []
      : JSON.parse(localStorage.getItem("recycletasks"));

  const [incompleteTask, setIncompleteTask] = useState(value);
  const [completeTask, setCompleteTask] = useState(value2);
  const [Recyclebean, setRecyclebean] = useState(recyletasks);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(incompleteTask));
    localStorage.setItem("completeTask", JSON.stringify(completeTask));
    localStorage.setItem("recycletasks", JSON.stringify(Recyclebean));
     //console.log(incompleteTask);
    // console.log(Recyclebean);
  }, [incompleteTask, completeTask, Recyclebean]);

  const AddComplteTask = (taskname, index) => {
    setCompleteTask((old) => [...old, { name: taskname }]);
    incompleteTask.splice(index, 1);
  };

  const BacktoIncompltetasks = (taskname, index) => {
    setIncompleteTask((old) => [...old, { name: taskname }]);
    completeTask.splice(index, 1);
  };

  const RemoveCompletTasks = (taskname, index) => {
    setRecyclebean((old) => [...old, { name: taskname, status: "complete" }]);
    completeTask.splice(index, 1);
  };

  const RemoveInCompleteTask = (taskname, index) => {
    setRecyclebean((old) => [...old, { name: taskname, status: "incomplete" }]);
    incompleteTask.splice(index, 1);
  };

  const handlekey = (e) => {
    let temp = e.target.value;
    if (e.key === "Enter") {
      if(temp.length>3 ){
        setIncompleteTask((old) => [...old, { name: temp }]);
      }
     
      //console.log(incompleteTask);
    }
  };

  const handleremove = (e) => {
    e.preventDefault();
    let p = [];
    setCompleteTask(p);
    setRecyclebean(p);
  };

  const [store, setStore] = useState("");
  const handleChange = (e) => {
    setStore(e.target.value);
  };
  const handleClick = () => {
    if(store.length>3 ){
      setIncompleteTask((old) => [...old, { name: store }]);
      
    }
    else{
      setStore("empty")
    }
  };
  

  const tasktype = [
    { id: "1", name: "Design",bg:"#DF82C5" },
    { id: "2", name: "FIXME",bg:"#F46262" },
    { id: "3", name: "Feature",bg:"#E37AEC" },
    { id: "4", name: "BugFix",bg:"#E8719C" },
    { id: "5", name: "Prototyping",bg:"#5BB3CF" },
    { id: "6", name: "Build",bg:"#42C5AD" },
    { id: "7", name: "Other",bg:"#8E8E8E" },
  ];
  
  return (
    <div className={classes.main}>
      <Container>
        <div style={{display:"flex",justifyContent:"center",margin:"50px 0px 10px"}}>
          <h1>Personal to-do list 🚀</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"10px 0px"}}>
          <span>type a todo and "Enter" / click 👉</span>
        </div>
        <InputText
        error={store}
          onkeydown={handlekey}
          onchange={handleChange}
          onclick={handleClick}
        />

        <div className={` ${classes.tasktype} ${store.length > 3 ? classes.alert:classes.noalert } `}>
          {tasktype.map((data) => (
            <span
            style={{padding:"5px 15px", cursor: "pointer",margin:"3px 10px",background:data.bg,color:"white",borderRadius:"50px"}}
              key={data.id}
              onClick={(e) => {
                let temp = `[${data.name}] `.concat(store);
                setIncompleteTask((old) => [...old, { name: temp }]);
              }}
             
            >{data.name}</span>
          ))}
        </div>

        <div className={classes.dividerTag}>
          <Chip icon={<PlaylistAddCheckIcon style={{color:"#2BCB28"}} />} label="Tasks..." />{" "}
          <Divider className={classes.divider} component="li" variant="inset" />
        </div>
        {incompleteTask.length > 0 ?
          incompleteTask.map((data, index) => (
            <div key={index}>
              <IncompleteTask
                AddComplteTask={() => AddComplteTask(data.name, index)}
                RemoveInCompleteTask={() =>
                  RemoveInCompleteTask(data.name, index)
                }
                taskname={data.name}
              />
            </div>
          )):<Box className={classes.nodata}>No task added yet</Box> }
        {completeTask.length > 0 && (
          <div className={classes.dividerTag}>
            <Chip icon={<DoneAllIcon style={{color:"#2BCB28"}}/>} label="Complete" />{" "}
            <Divider
              className={classes.divider}
              component="li"
              variant="inset"
            />
          </div>
        )}
        {completeTask.length > 0 &&
          completeTask.map((data, index) => (
            <div key={index}>
              <CompletedTask
                BacktoIncompltetasks={() =>
                  BacktoIncompltetasks(data.name, index)
                }
                RemoveCompletTasks={() => RemoveCompletTasks(data.name, index)}
                taskname={data.name}
              />
            </div>
          ))}

        {/* <Button onClick={handleremove} variant="contained" color="secondary">
          remove
        </Button> */}
      </Container>
    <footer className={classes.footer} >Made with  💜  by Urmi Rahman  © 2021</footer>
    </div>
  );
};
