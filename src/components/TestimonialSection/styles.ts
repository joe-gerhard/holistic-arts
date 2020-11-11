import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.webp";

const TestimonialSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    position: relative;
    min-height: 200px;
    background-color: ${theme.secondary};
    display: flex;
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 20px;
    background: ${theme.secondary};
    border: 2px solid ${theme.primary + 15};
    width: 95%;
    max-width: 625px;
    margin-bottom: 150px;
    border-radius: 10px;
  `
);

const Headline = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text", serif;
    color: ${theme.highlight};
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 810px) {
      font-size: 24px;
    }
  `
);

const ReviewGroup = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 150px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Libre Caslon Text", serif;
    font-style: italic;
    font-size: 24px;
    color: ${theme.highlight};
    margin-left: auto;
    margin-bottom: 10px;
  `
);

const ReviewText = styled.p(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    text-align: left;
    color: ${theme.gray};
    margin-bottom: 10px;
    white-space: pre-line;
  `
);

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ReadMoreButton = styled.span(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: ${theme.highlight};
    margin-left: 5px;

    &:hover {
      cursor: pointer;
    }
  `
);

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const ArrowButton = styled.button(
  ({ theme }: PropsWithTheme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: transparent;
    border-radius: 100%;
    border: 2px solid ${theme.gray};
    margin: 0 17px;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  `
);

const LeftArrow = styled.img`
  height: 11px;
  width: 17px;
  transform: rotate(270deg);
  filter: brightness(40%);
`;

const RightArrow = styled.img`
  height: 11px;
  width: 17px;
  transform: rotate(90deg);
  filter: brightness(40%);
`;

interface IndicatorProps extends PropsWithTheme {
  highlight: boolean;
}

const Indicator = styled.div(
  ({ theme, highlight }: IndicatorProps) => css`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 2px solid ${highlight ? theme.gray : theme.lightGray};
    margin: 0 4px;
    background: ${highlight ? theme.gray : "transparent"};
  `
);

export default {
  TestimonialSection,
  BackgroundImage,
  Card,
  Headline,
  ReviewGroup,
  Name,
  ReviewText,
  Row,
  ReadMoreButton,
  Controls,
  ArrowButton,
  LeftArrow,
  RightArrow,
  Indicator,
};
