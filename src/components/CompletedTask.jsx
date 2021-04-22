import React from "react";
import { Box } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {styledComplteTask} from '../styledComponent/StyledComponent'

export const CompletedTask = ({taskname,BacktoIncompltetasks,RemoveCompletTasks}) => {
  const classes = styledComplteTask();
  return (
    <Box
      className={`${classes.box} ${classes.complete}`}
      p={1}
      display="flex"
      alignItems="center"
    >
      <CheckCircleIcon onClick={BacktoIncompltetasks} className={classes.icon} />
      {taskname}
      <DeleteForeverIcon onClick={RemoveCompletTasks} className={classes.CrossIcon} />
    </Box>
  );
};
