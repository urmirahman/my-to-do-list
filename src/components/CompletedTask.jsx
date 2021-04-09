import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from '@material-ui/icons/Cancel';
import {styledComplteTask} from '../styledComponent/StyledComponent'

export const CompletedTask = ({taskname,BacktoIncompltetasks,RemoveCompletTasks}) => {
  const classes = styledComplteTask();
  return (
    <Box
      className={`${classes.box} ${classes.complete}`}
      p={1}
      display="flex"
      bgcolor="blue"
      alignItems="center"
    >
      <CheckCircleIcon onClick={BacktoIncompltetasks} className={classes.icon} />
      {taskname}
      <CancelIcon onClick={RemoveCompletTasks} className={classes.CrossIcon} />
    </Box>
  );
};
