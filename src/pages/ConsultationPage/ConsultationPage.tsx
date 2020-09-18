import React from "react";
import Styled from "./styles";
import ConsultationSection from "../../components/ConsultationSection";
import Footer from "../../components/Footer";

const ConsultationPage = () => {
  return (
    <Styled.ConsultationPage>
      <ConsultationSection />
      <Footer />
    </Styled.ConsultationPage>
  );
};

export default ConsultationPage;
