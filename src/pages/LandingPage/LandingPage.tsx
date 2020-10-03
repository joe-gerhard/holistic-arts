import React from "react";
import Styled from "./styles";
import Footer from "../../components/Footer";
import SplashSection from "../../components/SplashSection";
import FAQSection from "../../components/FAQSection";
import TestimonialSection from "../../components/TestimonialSection";
import AboutHomeopathySection from "../../components/AboutHomeopathySection";

const LandingPage = () => {
  return (
    <Styled.LandingPage>
      <SplashSection />
      <AboutHomeopathySection />
      <FAQSection />
      <TestimonialSection />
      <Footer />
    </Styled.LandingPage>
  );
};

export default LandingPage;
