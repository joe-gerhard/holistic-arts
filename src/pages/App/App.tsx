import React from "react";
import { StyledApp } from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ConsultationPage from "../ConsultationPage";
import ResourcesPage from "../ResourcesPage";

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/consultation" component={ConsultationPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </StyledApp>
  );
}

export default App;
