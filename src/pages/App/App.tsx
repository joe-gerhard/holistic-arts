import React from "react";
import { StyledApp } from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </StyledApp>
  );
}

export default App;
