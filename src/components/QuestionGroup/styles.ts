import styled, { css } from "styled-components";
import { PropsWithTheme } from "../../styles/theme";

const QuestionGroup = styled.div(
  ({ theme }: PropsWithTheme) => css`
    width: 30%;
    min-width: 250px;
    max-width: 510px;

    color: ${theme.light};
    font-family: "Open Sans";

    @media (max-width: 810px) {
      width: 100%;
      margin-bottom: 15px;
    }
  `
);

const QuestionRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Question = styled.h3`
  font-size: 18px;
`;

interface AnswerProps {
  isOpen: boolean;
}

const Answer = styled.p(
  ({ isOpen }: AnswerProps) => css`
    margin: 2px 0 7px 0;
    font-size: 14px;

    @media (max-width: 810px) {
      display: ${isOpen ? "block" : "none"};
      margin-bottom: 10px;
      margin-left: 27px;
    }
  `
);

interface ArrowProps {
  isOpen: boolean;
}

const Arrow = styled.img(
  ({ isOpen }: ArrowProps) => css`
    display: none;
    height: 11px;
    width: 17px;
    margin-right: 10px;
    transform: rotate(${isOpen ? "0deg" : "180deg"});
    margin-top: 7px;

    @media (max-width: 810px) {
      display: block;
    }
  `
);

export default {
  QuestionGroup,
  QuestionRow,
  Question,
  Answer,
  Arrow,
};
