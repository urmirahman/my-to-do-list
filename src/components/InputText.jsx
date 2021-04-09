import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import {styledInputText} from '../styledComponent/StyledComponent'

export const InputText = (props) => {
  const classes = styledInputText();


  return (

      <TextField
        onKeyDown={props.onkeydown}
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
    
  );
};

