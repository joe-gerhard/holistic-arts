import React from "react";
import { StyledApp } from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </StyledApp>
  );
}

export default App;
