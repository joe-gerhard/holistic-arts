import React from "react";
import { StyledApp } from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ConsultationPage from "../ConsultationPage";

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/consultation" component={ConsultationPage} />
      </Switch>
    </StyledApp>
  );
}

export default App;
