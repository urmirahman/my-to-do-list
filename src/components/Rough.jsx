
import React, { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
const Rough = () => {
  const [state, setState] = useState('');
    const [temp,settemp] = useState('')
  const handlekey = (e) => {
    if(e.key ==="Enter"){
      setState(e.target.value)
      console.log(state)

    }
  };
  const handleChnage = (e) => {
    settemp(e.target.value)
   
  };
  const handleClick = () => {
    console.log(temp)
  }
  
    

  return (
    <div>
      <h1>Hi Geeks!</h1>
        
<p>Key pressed is: {state}</p>
  
        
      {/* Passing the key pressed to the handler function */}
      <TextField type="text" onKeyDown={handlekey} onChange={(e) => handleChnage(e)}  />
        <Button onClick={handleClick} >Addd</Button>
    </div>
  );
};
  
export default Rough;