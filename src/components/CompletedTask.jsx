import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from '@material-ui/icons/Cancel';
export const CompletedTask = ({taskname,BacktoIncompltetasks,RemoveCompletTasks}) => {
  const classes = useStyles();
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

const useStyles = makeStyles({
  box: {
    background: "#00c9ff" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #00c9ff, #92fe9d)" /* Chrome 10-25, Safari 5.1-6 */,
    background: " linear-gradient(to right, #00c9ff, #92fe9d)",
    padding: "10px 15px",
    borderRadius: 5,
    margin:"10px 0px"
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
  },
  CrossIcon: {
    padding: "0px 10px",
    cursor: "pointer",
    marginLeft:"auto"
  },
  complete: {
    textDecoration: "line-through",
  },
});
