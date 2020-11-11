import React, { useEffect } from "react";
import Styled from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ConsultationPage from "../ConsultationPage";
import ResourcesPage from "../ResourcesPage";
import ContactPage from "../ContactPage";
import FAQPage from "../FAQPage";
import TestimonialsPage from "../TestimonialsPage";

function App() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <Styled.App>
      <Navbar/>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/consultation" component={ConsultationPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/testimonials" component={TestimonialsPage} />
        <Route path="/" render={() => <LandingPage/>} />
      </Switch>
    </Styled.App>
  );
}

export default App;
