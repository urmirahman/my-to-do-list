import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
export const InputText = () => {
  const classes = userStyles();
  return (
    <form>
      <TextField
        id="outlined-full-width"
        label="Add Tasks"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddOutlinedIcon style={{color:"gray"}}/>
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

 
});
