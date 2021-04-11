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
      ? [{name:"[Others] add your first to-do"},
      {name:"[Design] Design your first app"}]
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
      setIncompleteTask((old) => [...old, { name: temp }]);
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
    setIncompleteTask((old) => [...old, { name: store }]);
  };
  

  const tasktype = [
    { id: "1", name: "Design" },
    { id: "2", name: "FIXME" },
    { id: "3", name: "Feature" },
    { id: "4", name: "BugFix" },
    { id: "5", name: "Prototyping" },
    { id: "6", name: "Other" },
  ];
  
  return (
    <div className={classes.main}>
      <Container>
        <InputText
        error={store}
          onkeydown={handlekey}
          onchange={handleChange}
          onclick={handleClick}
        />

        <div className={classes.tasktype}>
          {tasktype.map((data) => (
            <Chip
              key={data.id}
              onClick={(e) => {
                let temp = `[${data.name}] `.concat(store);
                setIncompleteTask((old) => [...old, { name: temp }]);
              }}
              label={data.name}
            />
          ))}
        </div>

        <div className={classes.dividerTag}>
          <Chip icon={<PlaylistAddCheckIcon />} label="Tasks..." />{" "}
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
            <Chip icon={<DoneAllIcon />} label="Complete" />{" "}
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
    </div>
  );
};
