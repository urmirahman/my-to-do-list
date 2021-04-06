import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { InputText } from "./components/InputText";
import { IncompleteTask } from "./components/IncompleteTask";
import { CompletedTask } from "./components/CompletedTask";
import Rough from "./components/Rough";

function App() {
  return (
    <Container className="App">
     <Rough/>
    </Container>
  );
}

export default App;
