import React from "react";
import { Box } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {styledIncomplteTask} from '../styledComponent/StyledComponent'
export const IncompleteTask = ({ taskname,AddComplteTask,RemoveInCompleteTask }) => {
  const classes = styledIncomplteTask();


 
  return (
    <Box
      className={`${classes.box} ${classes.incomplete}`}
      p={1}
      display="flex"
      alignItems="center"
    >
      <CheckCircleOutlineOutlinedIcon onClick={AddComplteTask} className={classes.icon} />
      {taskname}
      <DeleteForeverIcon onClick={RemoveInCompleteTask} className={classes.CrossIcon} />
    </Box>
  );
};
