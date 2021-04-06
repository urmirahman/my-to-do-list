import React, { useState } from 'react';
import { InputText } from '../components/InputText';

export const Home = () => {
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
        <div>
            <InputText onchange={handleChnage} onkeydown={handlekey}/>
        </div>
    )
}
