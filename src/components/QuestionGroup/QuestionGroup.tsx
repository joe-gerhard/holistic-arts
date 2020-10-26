import React from "react";
import Styled from "./styles";

interface QuestionGroupProps {
  question: string;
  answer: string;
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ question, answer }) => {

  return (
    <Styled.QuestionGroup>
      <Styled.QuestionRow>
        <Styled.Question>
          {question}
        </Styled.Question>
      </Styled.QuestionRow>
      <Styled.Answer>{answer}</Styled.Answer>
    </Styled.QuestionGroup>
  );
};

export default QuestionGroup;
