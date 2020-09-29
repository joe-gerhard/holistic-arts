import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";

const ConsultationSection = () => {
  return (
    <Styled.ConsultationSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.Headline>Set Up Your Consultation</Styled.Headline>

          <Styled.Header>Initial Consultation</Styled.Header>
          <Styled.Text>
            Your first consultation normally takes about 2 hours. No preparation
            is needed except for completion of a health history form that will
            be provided prior to your visit.
          </Styled.Text>
          <Styled.Header>Follow-up Meetings</Styled.Header>
          <Styled.Text>
            Follow-up visits are usually no more than an hour. The first
            follow-up meeting usually takes place about 4 weeks after the
            initial consultation. Your individual needs will determine the
            frequency of the follow-up visits thereafter; normally, they are at
            4 week intervals in the beginning. The goal is to get you healthy so
            you only call the homeopath as needed.
          </Styled.Text>
          <Styled.Header>
            To set up your initial consultation, please contact Barbara via
            email here:
          </Styled.Header>
          <Styled.EmailLink
            target="_blank"
            href="mailto:Barbara@holisticartsnj.com"
          >
            EMAIL ME
          </Styled.EmailLink>
        </Styled.Card>
      </ContentWrapper>
    </Styled.ConsultationSection>
  );
};

export default ConsultationSection;
