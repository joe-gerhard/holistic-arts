import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import { Link } from "react-router-dom";

const AboutHomeopathySection = styled(Section)`
  background: white;
`;

const Content = styled(ContentWrapper)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
`;

const Header = styled.h1(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text";
    color: ${theme.highlight};
    font-size: 36px;
    font-weight: bold;
  `
);

const SubHeader = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text";
    color: ${theme.highlight};
    font-size: 18px;
    font-style: italic;
    letter-spacing: 0.08em;
  `
);

const Paragraph = styled.p(
  ({ theme }: PropsWithTheme) => css`
    margin-top: 20px;
    font-family: "Open Sans";
    color: ${theme.dark};
    font-size: 18px;
  `
);

const LearnMoreButton = styled(Link)(
  ({ theme }: PropsWithTheme) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 234px;
    height: 53px;

    background: ${theme.light};
    border: 2px solid ${theme.dark};

    margin: 30px 0;

    color: ${theme.dark};
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
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
