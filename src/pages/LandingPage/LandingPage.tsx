import React from "react";
import Styled from "./styles";
import Footer from "../../components/Footer";
import SplashSection from "../../components/SplashSection";
import FAQSection from "../../components/FAQSection";
import TestimonialSection from "../../components/TestimonialSection";
import AboutHomeopathySection from "../../components/AboutHomeopathySection";

interface LandingPageProps {
  refs: {
    FAQRef: React.RefObject<HTMLDivElement>;
    testimonialRef: React.RefObject<HTMLDivElement>;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ refs }) => {
  const { FAQRef, testimonialRef } = refs;

  return (
    <Styled.LandingPage>
      <SplashSection />
      <AboutHomeopathySection />
      <FAQSection FAQRef={FAQRef} />
      <TestimonialSection testimonialRef={testimonialRef} />
      <Footer />
    </Styled.LandingPage>
  );
};

export default LandingPage;
