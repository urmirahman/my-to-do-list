import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { InputText } from "./components/InputText";

function App() {
  return (
    <Container className="App">
      <InputText />
    </Container>
  );
}

export default App;
