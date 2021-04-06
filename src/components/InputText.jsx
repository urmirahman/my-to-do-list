import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const InputText = () => {
  const classes = userStyles();
  return (
    <form>
      <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Add task"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </form>
  );
};

const userStyles = makeStyles({
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiOutlinedInput-input": {
      padding: "10px 15px 10px 15px !important",
    },
  },

  ".MuiOutlinedInput-input": {
    font: "inherit",
    color: "currentColor",
    width: "100%",
    border: "0",
    height: "1.1876em",
    margin: "0",
    display: " block",
    padding: "6px 0 7px",
    minWidth: " 0",
    background: "none",
    boxSizing: "content-box",
    letterSpacing: " inherit",
    animationDuration: " 10ms",
    wepkitTapHighlishtColor: "transparent",
  },
});

//     '.MuiOutlinedInput-input': {
//         font: "inherit",
// color: "currentColor",
// width: "100%",
// border: "0",
// height: "1.1876em",
// margin: "0",
// display:" block",
// padding: "6px 0 7px",
// minWidth:" 0",
// background: "none",
// boxSizing: "content-box",
// letterSpacing:" inherit",
// animationDuration:" 10ms",
// wepkitTapHighlishtColor:"transparent"

//     },
