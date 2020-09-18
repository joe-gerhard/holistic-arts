import React, { useState } from "react";
import Styled from "./styles";
import arrow from "../../images/Arrow.png";

interface QuestionGroupProps {
  question: string;
  answer: string;
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpenQuestion = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Styled.QuestionGroup>
      <Styled.QuestionRow>
        <Styled.Arrow
          isOpen={isOpen}
          src={arrow}
          alt="Dropdown Arrow"
          onClick={handleToggleOpenQuestion}
        />
        <Styled.Question onClick={handleToggleOpenQuestion}>
          {question}
        </Styled.Question>
      </Styled.QuestionRow>
      <Styled.Answer isOpen={isOpen}>{answer}</Styled.Answer>
    </Styled.QuestionGroup>
  );
};

export default QuestionGroup;
