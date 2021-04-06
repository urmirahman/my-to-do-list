import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { InputText } from "./components/InputText";
import { IncompleteTask } from "./components/IncompleteTask";

function App() {
  return (
    <Container className="App">
      <IncompleteTask/>
    </Container>
  );
}

export default App;
