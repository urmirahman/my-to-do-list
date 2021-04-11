import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { styledInputText } from "../styledComponent/StyledComponent";

export const InputText = (props) => {
  const classes = styledInputText();


  return (
    <>
    <TextField
      onKeyDown={props.onkeydown}
     onChange={props.onchange}
     
      id="outlined-full-width"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AddOutlinedIcon style={{ color: "gray" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <PlaylistAddIcon
             onClick={props.onclick}
              style={{
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
                background: "#f50057",
                padding: "3px 10px",
              }}
            />
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
