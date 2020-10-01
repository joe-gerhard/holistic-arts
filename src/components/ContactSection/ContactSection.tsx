import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";

const ContactSection = () => {
  return (
    <Styled.ContactSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.Headline>Contact</Styled.Headline>
          <Styled.Row>
            <Styled.Label>Name:</Styled.Label>
            <Styled.Text>Barbara Lowry, DSH, CCH</Styled.Text>
          </Styled.Row>
          <Styled.Row>
            <Styled.Label>Address:</Styled.Label>
            <Styled.Text>{`Holistic Arts, LLC 
            500 Throckmorton Street, #3601 
            Fort Worth, TX 76102 `}</Styled.Text>
          </Styled.Row>
          <Styled.Row>
            <Styled.Label>Email:</Styled.Label>
            <Styled.Text>Barbara@holisticartsnj.com</Styled.Text>
          </Styled.Row>
          <Styled.Row>
            <Styled.Label>Skype:</Styled.Label>
            <Styled.Text>barbara_lowry</Styled.Text>
          </Styled.Row>
          <Styled.Row>
            <Styled.Label>Mobile:</Styled.Label>
            <Styled.Text>+1 (973) 767-8771</Styled.Text>
          </Styled.Row>
        </Styled.Card>
      </ContentWrapper>
    </Styled.ContactSection>
  );
};

export default ContactSection;
