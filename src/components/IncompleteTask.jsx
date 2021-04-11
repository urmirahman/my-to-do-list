import React from "react";
import { Box } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import CancelIcon from '@material-ui/icons/Cancel';
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
      <CancelIcon onClick={RemoveInCompleteTask} className={classes.CrossIcon} />
    </Box>
  );
};
