
import React, { useState } from 'react';
  
const Rough = () => {
  const [state, setState] = useState('');
    
  const handlekey = (event) => {
    console.log(state)
  };
  const handleChnage = (e) => {
    setState(e.target.value)
    console.log(state)
    if(e.key === "Enter"){
      console.log(state+" enter key ")

    }
  };
    

  return (
    <div>
      <h1>Hi Geeks!</h1>
        
<p>Key pressed is: {state}</p>
  
        
      {/* Passing the key pressed to the handler function */}
      <input type="text" onKeyDown={handlekey} onChange={(e) => handleChnage(e)}  />
        
    </div>
  );
};
  
export default Rough;