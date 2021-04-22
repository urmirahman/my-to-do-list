import React from "react";
import {  TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { styledInputText } from "../styledComponent/StyledComponent";

export const InputText = (props) => {
  const classes = styledInputText();

 let err = props.error
 let error = (err.length > 0 && err.length < 4 ) ?"Too small" :err ==="empty" ? "please enter something" :""
 console.log(error)
  return (
  <div>
 <div style={{display:"flex",alignItems:"center"}}>
    <TextField
      onKeyDown={props.onkeydown}
     onChange={props.onchange}
     error={err.length > 0 && err.length < 4 ? true : err ==="empty"? true :false}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AddOutlinedIcon style={{ color: "gray" }} />
          </InputAdornment>
        ),
      }}
      style={{ margin: 8,borderRadius: "2px"}}
      placeholder="Add task"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      />
      <PlaylistAddIcon
             onClick={props.onclick}
              style={{
                borderRadius: "2px",
                color: "white",
                cursor: "pointer",
                background: "#C4C4C4",
                padding: "8px 18px",
              }}
            />
      </div>
      <span style={{margin:8,color:"red"}}>{error}</span>
  </div>
   
  );
};
