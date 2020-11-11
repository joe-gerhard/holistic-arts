import React from "react";
import Styled from "./styles";
import Footer from "../../components/Footer";
import TestimonialSection from "../../components/TestimonialSection";

const TestimonialsPage = () => {
  return (
    <Styled.TestimonialsPage>
      <TestimonialSection />
      <Footer />
    </Styled.TestimonialsPage>
  );
};

export default TestimonialsPage;
