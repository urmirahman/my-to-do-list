import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

export const IncompleteTask = ({ taskname,AddComplteTask }) => {
  const classes = useStyles();


 
  return (
    <Box
      className={`${classes.box} ${classes.incomplete}`}
      p={1}
      display="flex"
      bgcolor="blue"
      alignItems="center"
    >
      <CheckCircleOutlineOutlinedIcon onClick={AddComplteTask} className={classes.icon} />
      {taskname}
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
    margin: "10px 15px 10px 15px !important",
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
  },
  incomplete: {},
  complete: {
    textDecoration: "line-through",
  },
});
