import styled, { css } from "styled-components";
import { PropsWithTheme } from "../../styles/theme";

const QuestionGroup = styled.div(
  ({ theme }: PropsWithTheme) => css`
    min-width: 250px;
    max-width: 510px;
    width: 100%;
    margin-bottom: 15px;

    color: ${theme.dark};
    font-family: "Open Sans", sans-serif;
  `
);

const QuestionRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Question = styled.h3`
  font-size: 16px;
`;



const Answer = styled.p`
  margin: 2px 0 7px 0;
  font-size: 16px;
  margin-bottom: 10px;
`;

interface ArrowProps {
  isOpen: boolean;
}

const Arrow = styled.img(
  ({ isOpen }: ArrowProps) => css`
    height: 11px;
    width: 17px;
    margin-right: 10px;
    transform: rotate(${isOpen ? "0deg" : "180deg"});
    margin-top: 7px;
  `
);

export default {
  QuestionGroup,
  QuestionRow,
  Question,
  Answer,
  Arrow,
};
