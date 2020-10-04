import React, { useEffect, useRef } from "react";
import Styled from "./styles";
import Navbar from "../../components/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "../LandingPage";
import AboutPage from "../AboutPage";
import ConsultationPage from "../ConsultationPage";
import ResourcesPage from "../ResourcesPage";
import ContactPage from "../ContactPage";

function App() {
  const FAQRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const refs = {
    FAQRef,
    testimonialRef,
  };

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
      <Navbar refs={refs} />
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/consultation" component={ConsultationPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route path="/" render={() => <LandingPage refs={refs} />} />
      </Switch>
    </Styled.App>
  );
}

export default App;
