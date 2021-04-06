import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
export const InputText = () => {
  const classes = userStyles();
  const [values,setvalues] = useState('')

  const handleChange = (e) =>{
      e.preventDefault()
      setvalues(e.key)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setvalues(e.key)
    if (e.key === "Enter") {
      console.log(values);
    }
  };

  return (
    <form>
      <TextField
      type="text"
        onKeyPress={(e) => handleSubmit(e)}
        name="tasks"
        id="outlined-full-width"
        label="tasks"
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
