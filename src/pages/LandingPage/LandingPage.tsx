import React from "react";
import { StyledLandingPage } from "./styles";
import Footer from "../../components/Footer";
import SplashSection from "../../components/SplashSection";
import AboutHomeopathySection from "../../components/AboutHomeopathySection";
import FAQSection from "../../components/FAQSection";
import TestimonialSection from "../../components/TestimonialSection";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <SplashSection />
      <AboutHomeopathySection />
      <FAQSection />
      <TestimonialSection />
      <Footer />
    </StyledLandingPage>
  );
};

export default LandingPage;
