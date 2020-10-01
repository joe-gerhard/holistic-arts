import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const ContactSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    min-height: calc(100vh - 70px);
    background-color: ${theme.secondary};
    display: flex;
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
    background: ${theme.light};
    position: relative;
    z-index: 1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 60px;
    font-family: "Open Sans";
    margin-bottom: 100px;

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
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  `
);

const Header = styled.h5(
  ({ theme }: PropsWithTheme) => css`
    font-size: 14px;
    margin-top: 15px;
  `
);

const Text = styled.p(
  ({ theme }: PropsWithTheme) => css`
    white-space: pre-line;
    color: ${theme.dark};
    font-size: 14px;
    width: 100%;
    margin-bottom: 10px;
    user-select: text;
  `
);

const Row = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin-top: 10px;
`;

const Label = styled.span(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.highlight};
    min-width: 100px;
    text-align: right;
    margin-right: 10px;
    font-size: 14px;
  `
);

const EmailLink = styled.a(
  ({ theme }: PropsWithTheme) => css`
    margin: 0 auto;
    margin-top: 30px;
    color: ${theme.light};
    background: ${theme.highlight};
    height: 40px;
    width: 234px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-family: "Open Sans";
    font-weight: bold;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  `
);

export default {
  ContactSection,
  BackgroundImage,
  Card,
  Headline,
  Header,
  Text,
  Row,
  Label,
  EmailLink,
};
