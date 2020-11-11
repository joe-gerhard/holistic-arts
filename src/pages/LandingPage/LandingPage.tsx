import React from "react";
import Styled from "./styles";
import Footer from "../../components/Footer";
import SplashSection from "../../components/SplashSection";
import AboutHomeopathySection from "../../components/AboutHomeopathySection";

const LandingPage: React.FC = () => {

  return (
    <Styled.LandingPage>
      <SplashSection />
      <AboutHomeopathySection />
      <Footer />
    </Styled.LandingPage>
  );
};

export default LandingPage;
