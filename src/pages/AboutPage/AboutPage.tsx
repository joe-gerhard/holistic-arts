import React from "react";
import Styled from "./styles";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <Styled.AboutPage>
      <AboutSection />
      <Footer />
    </Styled.AboutPage>
  );
};

export default AboutPage;
