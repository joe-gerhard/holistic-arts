import styled, { css } from "styled-components";
import { PropsWithTheme } from "../../styles/theme";

const QuoteGroup = styled.div(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.primary};
    position: relative;
    z-index: 1;
    background: ${theme.secondary};
    width: 90%;
    max-width: 360px;
    border: 2px solid ${theme.primary + 15};
    border-radius: 10px;
    padding: 30px 40px;

    @media (max-width: 810px) {
      margin-top: 0;
      background: transparent;
      border: none;
      margin: 0;
      padding: 0;
      max-width: 270px;
    }

    @media (max-width: 523px) {
      max-width: 250px;
    }
  `
);

const Quote = styled.div`
  font-family: "Libre Caslon Text", serif;
  font-style: italic;
  font-size: 18px;

  @media (max-width: 523px) {
    font-size: 17px;
  }
`;

const QuoteAuthor = styled.div`
  font-family: "Libre Caslon Text", serif;
  font-size: 12px;
  margin-left: 46%;
  margin-top: 5px;

  @media (max-width: 523px) {
    font-size: 11px;
  }
`;

export default {
  QuoteGroup,
  Quote,
  QuoteAuthor,
};
