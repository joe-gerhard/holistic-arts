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
    max-height: calc(100vh - 70px);
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
    margin-top: 10vh;
    margin-bottom: 30px;
    color: ${theme.primary};
    width: 90%;
    max-width: 500px;

    @media (max-width: 812px) {
      margin-top: 0;
    }
  `
);

const Quote = styled.div`
  font-family: "Libre Caslon Text";
  font-style: italic;
  font-size: 31px;

  @media (max-width: 523px) {
    font-size: 20px;
  }
`;

const QuoteAuthor = styled.div`
  font-family: "Libre Caslon Text";
  font-size: 18px;
  margin-left: 30%;
  margin-top: 20px;

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

export default {
  SplashSection,
  Content,
  Image,
  QuoteWrapper,
  QuoteGroup,
  Quote,
  QuoteAuthor,
  BackgroundImage,
};
