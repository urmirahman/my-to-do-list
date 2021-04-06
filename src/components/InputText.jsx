import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
export const InputText = () => {
  const classes = userStyles();
  const [state, setState] = useState([""]);

  const handlekey = (e) => {
      setState(old =>([...old,"hey"]))
      console.log(state);
  };
  const handleChnage = (e) => {
    setState(e.target.value);
    console.log(state);
  };

  return (
    <>
      <TextField
        onKeyDown={(e) => handlekey(e)}
        onChange={(e) => handleChnage(e)}
        id="outlined-full-width"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddOutlinedIcon style={{ color: "gray" }} />
            </InputAdornment>
          ),
        }}
        style={{ margin: 8 }}
        placeholder="Add task"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  );
};

const userStyles = makeStyles({
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiOutlinedInput-input": {
      padding: "10px 15px 10px 15px !important",
    },
  },
});
