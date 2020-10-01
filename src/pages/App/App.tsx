import React from "react";
import Styled from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ConsultationPage from "../ConsultationPage";
import ResourcesPage from "../ResourcesPage";
import ContactPage from "../ContactPage";

function App() {
  return (
    <Styled.App>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/consultation" component={ConsultationPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Styled.App>
  );
}

export default App;
