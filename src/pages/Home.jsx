import { Button, Divider, Chip,Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { IncompleteTask } from "../components/IncompleteTask";
import { CompletedTask } from "../components/CompletedTask";
import { InputText } from "../components/InputText";
import {useStylesHome} from '../styledComponent/StyledComponent'
export const Home = () => {
  const classes = useStylesHome();
  let value =
    JSON.parse(localStorage.getItem("tasklist")) === null
      ? []
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
    console.log(completeTask);
    console.log(Recyclebean);
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
      setIncompleteTask((old) => [...old, { name: temp }]);
      //console.log(incompleteTask);
    }
  };

  const handleremove = (e) => {
    e.preventDefault();
    let p = [];
    setCompleteTask(p);
    setRecyclebean(p)
  };

  return (
    <Container>
      <InputText onkeydown={handlekey} />
      <div className={classes.dividerTag}>
        <Chip label="Tasks....." />{" "}
        <Divider className={classes.divider} component="li" variant="inset" />
      </div>
      {incompleteTask.length > 0 &&
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
        ))}
      {completeTask.length > 0 && (
        <div className={classes.dividerTag}>
          <Chip label="Complete" />{" "}
          <Divider className={classes.divider} component="li" variant="inset" />
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

      <Button onClick={handleremove} variant="contained" color="secondary">
        remove
      </Button>
    </Container>
  );
};
