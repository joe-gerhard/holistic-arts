import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.webp";

const ConsultationSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    min-height: calc(100vh - 70px);
    background-color: ${theme.secondary};
    display: flex;
    align-items: flex-start;
  `
);

const BackgroundImage = styled.div`
  position: absolute;
  width: 45%;
  height: 90%;
  top: 0;
  right: 0;
  z-index: 0;

  &::after {
    content: "";
    background: url(${flowerOfLife});
    background-size: 150vh;
    background-repeat: no-repeat;
    background-position: top 100% right 100%;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

const Card = styled.div(
  ({ theme }: PropsWithTheme) => css`
    background: ${theme.secondary};
    border: 2px solid ${theme.primary + 15};
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 60px;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 100px;
    width: 100%;
    max-width: 650px;
    border-radius: 10px;

    @media (max-width: 500px) {
      padding: 60px 20px;
    }
  `
);

const Headline = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.highlight};
    width: 90%;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 400px) {
      font-size: 18px;
    }
  `
);

const Header = styled.h5(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.dark};
    font-size: 16px;
    margin-top: 15px;
  `
);

const Text = styled.p(
  ({ theme }: PropsWithTheme) => css`
    white-space: pre-line;
    width: 100%;
    max-width: 500px;
    color: ${theme.dark};
    font-size: 16px;
    margin-bottom: 10px;
  `
);

const EmailLink = styled.a(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.highlight};
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  `
);

export default {
  ConsultationSection,
  BackgroundImage,
  Card,
  Headline,
  Header,
  Text,
  EmailLink,
};
