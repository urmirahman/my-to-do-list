import { Button, Divider, Chip } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { IncompleteTask } from "../components/IncompleteTask";
import { CompletedTask } from "../components/CompletedTask";
import { InputText } from "../components/InputText";

export const Home = () => {
  const classes = useStyles();
  let value =
    JSON.parse(localStorage.getItem("tasklist")) === null
      ? []
      : JSON.parse(localStorage.getItem("tasklist"));
  let value2 =
    JSON.parse(localStorage.getItem("completeTask")) === null
      ? []
      : JSON.parse(localStorage.getItem("completeTask"));
  const [incompleteTask, setIncompleteTask] = useState(value);
  const [completeTask, setCompleteTask] = useState(value2);
  const [Recyclebean, setRecyclebean] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(incompleteTask));
    localStorage.setItem("completeTask", JSON.stringify(completeTask));
    console.log(completeTask);
    console.log(Recyclebean);
  }, [incompleteTask, completeTask]);

  const AddComplteTask = (taskname, index) => {
    setCompleteTask((old) => [...old, { name: taskname }]);
    incompleteTask.splice(index, 1);
  };
  const BacktoIncompltetasks = (taskname, index) => {
    setIncompleteTask((old) => [...old, { name: taskname }]);
    completeTask.splice(index, 1);
    console.log("back to complte")
  };
  const RemoveCompletTasks = (taskname, index) => {
    setRecyclebean((old) => [...old, { name: taskname, status: "complete" }]);
    completeTask.splice(index, 1);
    console.log("removecomplte")
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
    //    localStorage.removeItem("tasklist")
    let p = [];
    setCompleteTask(p);
  };

  return (
    <div>
      <InputText onkeydown={handlekey} />
      <div className={classes.dividerTag}>
        <Chip label="Tasks..." />{" "}
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
    </div>
  );
};

const useStyles = makeStyles({
  dividerTag: {
    marginTop: "-10px",
    padding: "10px 0px",
    listStyle: "none",
    zIndex: 20,
  },
  divider: {
    marginLeft: "100px !important",
    zIndex: 10,
  },

  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiChip-root": {
      margin: "0px 10px !important",
      height: "20px !important",
      fontWeight: 600,
    },
  },
});
