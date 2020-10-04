import React from "react";
import Styled from "./styles";
import QuestionGroup from "../QuestionGroup";

interface FAQSectionProps {
  FAQRef: React.Ref<HTMLDivElement>;
}

const FAQSection: React.FC<FAQSectionProps> = ({ FAQRef }) => {
  return (
    <Styled.FAQSection ref={FAQRef}>
      <Styled.Content>
        <QuestionGroup
          question="Can homeopathy help me with my current condition?"
          answer="Homeopathy stimulates your own innate ability to heal and is usually not limited by the nature of the disease as it’s termed by the medical profession.  Mental, emotional and physical issues are treated as one dynamic disturbance – holistically."
        />
        <QuestionGroup
          question="Are homeopathic remedies expensive? Are they safe?"
          answer="They are inexpensive because the use of natural resources is kept to a minimum. And, homeopathic pharmacies worldwide do not use chemical processes to produce them. They are 100 percent non-toxic, non-addictive and U.S. FDA approved. There are over 3,000 remedies made from substances from the animal, mineral and plant kingdoms. Many remedies are available over the counter from health food stores, used for typical acute conditions and are available from natural care pharmacies worldwide for both acute and chronic conditions."
        />
        <QuestionGroup
          question="What will the homeopathic consultation be like?"
          answer="I will ask you about your personal history and what you would like to see healed. It will be very relaxed. You needn’t bring anything with you. I just want to understand you -- how you live in your world and experience life. There are no physical examinations."
        />
        <QuestionGroup
          question="How often will I have to come and how long are the appointments?"
          answer="The first visit is usually about two hours. Follow-up visits are an hour. The first follow-up visit takes place normally 4 weeks after the initial consultation. Your individual needs will determine the frequency and duration of the follow-up visits thereafter; in the beginning they are normally at one month intervals."
        />
      </Styled.Content>
    </Styled.FAQSection>
  );
};

export default FAQSection;
