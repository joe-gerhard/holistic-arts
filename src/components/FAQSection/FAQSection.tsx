import React from "react";
import Styled from "./styles";
import QuestionGroup from "../QuestionGroup";

const FAQSection = () => {
  return (
    <Styled.FAQSection>
      <Styled.Content>
        <QuestionGroup
          question="Can homeopathy help me with my current condition?"
          answer="Homeopathy stimulates your own innate ability to heal and 
          is usually not limited by the nature of the disease as it’s termed 
          by the medical profession. Mental, emotional and physical issues are 
          treated as one dynamic disturbance, holistically."
        />
        <QuestionGroup
          question="What will my homeopathic consultation be like?"
          answer="Your homeopath will ask you about your personal history and what you
            would like to see healed. In order to understand you as a unique
            individual, you will be asked to share details about how you live in
            your world and experience life. There are no physical examinations."
        />
        <QuestionGroup
          question="How often and how long are the appointments?"
          answer="The first visit is usually between two to three hours long.
            Follow-up visits are usually an hour long. The first follow-up visit
            is normally 4 weeks after the initial consultation. Your individual
            needs will determine the frequency of the follow-up visits
            thereafter; normally, they are at 1 month intervals in the
            beginning. The goal is to get you healthy so you only call your
            homeopath as needed."
        />
      </Styled.Content>
    </Styled.FAQSection>
  );
};

export default FAQSection;
