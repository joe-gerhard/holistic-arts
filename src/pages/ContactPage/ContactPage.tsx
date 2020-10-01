import React from "react";
import Styled from "./styles";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <Styled.ContactPage>
      <ContactSection />
      <Footer />
    </Styled.ContactPage>
  );
};

export default ContactPage;
