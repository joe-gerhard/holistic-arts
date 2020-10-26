import React from "react";
import Styled from "./styles";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";

const FAQPage = () => {
  return (
    <Styled.FAQPage>
      <FAQSection />
      <Footer />
    </Styled.FAQPage>
  );
};

export default FAQPage;
