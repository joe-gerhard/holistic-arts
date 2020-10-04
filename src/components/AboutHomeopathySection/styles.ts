import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import { Link } from "react-router-dom";

const AboutHomeopathySection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    background: ${theme.secondary};
    display: none;

    @media (max-width: 810px) {
      display: flex;
    }
  `
);

const Content = styled(ContentWrapper)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  width: 90%;
`;

const Header = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text", serif;
    color: ${theme.highlight};
    font-size: 36px;
    font-weight: bold;
  `
);

const SubHeader = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text", serif;
    color: ${theme.highlight};
    font-size: 18px;
    font-style: italic;
    letter-spacing: 0.08em;
  `
);

const Paragraph = styled.p(
  ({ theme }: PropsWithTheme) => css`
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
    color: ${theme.dark};
    font-size: 16px;
  `
);

const LearnMoreButton = styled(Link)(
  ({ theme }: PropsWithTheme) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 234px;
    height: 53px;

    background: transparent;
    border: 2px solid ${theme.gray};
    border-radius: 6px;

    margin: 30px 0;

    color: ${theme.gray};
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;

    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      border-color: ${theme.dark};
      color: ${theme.dark};
    }
  `
);

export default {
  AboutHomeopathySection,
  Content,
  Header,
  SubHeader,
  Paragraph,
  LearnMoreButton,
};
