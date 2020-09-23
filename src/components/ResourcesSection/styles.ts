import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const ResourcesSection = styled(Section)(
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
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 400px) {
      font-size: 18px;
    }
  `
);

const Header = styled.h5(
  ({ theme }: PropsWithTheme) => css`
    font-size: 14px;
    margin-top: 15px;
  `
);

const Subheader = styled.h6(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.gray};
    font-size: 12px;
    font-weight: normal;
  `
);

const Text = styled.p(
  ({ theme }: PropsWithTheme) => css`
    white-space: pre-line;
    width: 90%;
    max-width: 500px;
    color: ${theme.dark};
    font-size: 14px;
  `
);

const Link = styled.a(
  ({ theme }: PropsWithTheme) => css`
    text-decoration: none;
    color: ${theme.highlight};
    font-size: 14px;
    margin-bottom: 10px;
  `
);

export default {
  ResourcesSection,
  BackgroundImage,
  Card,
  Headline,
  Header,
  Subheader,
  Text,
  Link,
};
