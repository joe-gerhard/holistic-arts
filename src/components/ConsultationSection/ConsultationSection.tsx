import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";
import Quote from "../Quote";

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
          <Styled.Text>
            {`
            Initial Visit (+/- 2 hours): $325.00 

            Follow-up Visits in person or via Zoom (1 hour): $100.00 

            Follow-up Visits more than 1 year from the last visit: $200.00 

            Follow-up Visits after 2 years will be charged as an initial visit.`}
          </Styled.Text>
          <Styled.Header>Follow-up Meetings</Styled.Header>
          <Styled.Text>
            The first follow-up visit usually takes place about 4 weeks after
            the initial consultation. Your individual needs will determine the
            frequency of the follow-up visits thereafter; normally, they are at
            4 week intervals in the beginning.
          </Styled.Text>
          <Styled.Header>
            To set up your initial consultation, please{" "}
            <Styled.EmailLink
              target="_blank"
              href="mailto:Barbara@holisticartsnj.com"
            >
              email me
            </Styled.EmailLink>
          </Styled.Header>
        </Styled.Card>
        <Quote
          quote="Homeopathy cures a greater percentage of cases than any other method
            of treatment."
          author="Mahatma Gandhi"
        />
      </ContentWrapper>
    </Styled.ConsultationSection>
  );
};

export default ConsultationSection;
