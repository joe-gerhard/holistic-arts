import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const SplashSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    min-height: calc(100vh - 70px);
    background-color: ${theme.secondary};
    display: flex;
  `
);

const Image = styled.img(
  ({ theme }: PropsWithTheme) => css`
    position: relative;
    object-fit: cover;
    height: calc(100vh - 110px);
    width: 100%;
    max-height: 754px;
    max-width: 500px;
    z-index: 1;
  `
);

const QuoteWrapper = styled.div(
  ({ theme }: PropsWithTheme) => css`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-height: 754px;
    max-width: 500px;
    z-index: 1;
  `
);

const QuoteGroup = styled.div(
  ({ theme }: PropsWithTheme) => css`
    margin-top: 10vh;
    margin-bottom: 30px;
    color: ${theme.primary};
    width: 90%;
  `
);

const Quote = styled.div`
  font-family: "Libre Caslon Text";
  font-style: italic;
  font-size: 31px;

  @media (max-width: 523px) {
    font-size: 24px;
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
  Image,
  QuoteWrapper,
  QuoteGroup,
  Quote,
  QuoteAuthor,
  BackgroundImage,
};
