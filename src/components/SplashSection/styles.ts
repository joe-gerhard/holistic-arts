import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const SplashSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    min-height: calc(100vh - 70px);
    background-color: ${theme.secondary};
    display: flex;
    padding: 0;
  `
);

const Content = styled(ContentWrapper)`
  width: 100%;
  max-width: 100vw;

  @media (max-width: 812px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const Image = styled.img(
  ({ theme }: PropsWithTheme) => css`
    position: relative;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    /* max-height: calc(100vh - 70px); */
    max-width: 50vw;
    z-index: 1;

    @media (max-width: 812px) {
      max-width: 100vw;
    }
  `
);

const QuoteWrapper = styled.div(
  ({ theme }: PropsWithTheme) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-width: 50vw;
    z-index: 1;

    @media (max-width: 812px) {
      padding: 20px;
      padding-bottom: 0;
      position: absolute;
      margin: 0 auto;
      max-width: 100vw;
      bottom: 0;
      background: ${theme.secondary + 55};
      align-items: center;
      height: auto;
    }
  `
);

const QuoteGroup = styled.div(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.primary};
    background: ${theme.secondary};
    width: 90%;
    max-width: 360px;
    border: 2px solid ${theme.primary + 15};
    border-radius: 10px;
    padding: 30px 40px;
    align-self: flex-end;
    margin-right: 60px;
    margin-bottom: 20px;
    @media (max-width: 812px) {
      margin-top: 0;
    }
  `
);

const Quote = styled.div`
  font-family: "Libre Caslon Text";
  font-style: italic;
  font-size: 18px;

  @media (max-width: 523px) {
    font-size: 20px;
  }
`;

const QuoteAuthor = styled.div`
  font-family: "Libre Caslon Text";
  font-size: 12px;
  margin-left: 46%;
  margin-top: 5px;

  @media (max-width: 523px) {
    font-size: 14px;
  }
`;

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

const AboutHomeopathySection = styled.div(
  ({ theme }: PropsWithTheme) => css`
    display: flex;
    flex-direction: column;
    padding: 40px;
  `
);

const Headline = styled.h1(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text";
    font-size: 36px;
    font-weight: bold;
    color: ${theme.highlight};
    margin: 0 auto;
  `
);

const Subheader = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text";
    font-size: 18px;
    font-style: italic;
    color: ${theme.highlight};
    letter-spacing: 0.08em;
    margin: 0 auto;
  `
);

const Text = styled.p(
  ({ theme }: PropsWithTheme) => css`
    white-space: pre-line;
    font-family: "Open Sans";
    padding: 0 30px;
  `
);

export default {
  SplashSection,
  Content,
  Image,
  QuoteWrapper,
  QuoteGroup,
  Quote,
  QuoteAuthor,
  BackgroundImage,
  AboutHomeopathySection,
  Headline,
  Subheader,
  Text,
};
