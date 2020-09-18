import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

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
  width: 50vw;
  height: 50vh;
  bottom: 0;
  left: 0;
  z-index: 0;

  &::after {
    content: "";
    background: url(${flowerOfLife});
    background-size: 150vh;
    background-repeat: no-repeat;
    background-position: bottom 100% left 100%;
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
    background: ${theme.light};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    width: 95%;
    max-width: 625px;
    margin-bottom: 100px;
  `
);

const Headline = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans";
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
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans";
    font-size: 24px;
    color: ${theme.gray};
    margin-bottom: 10px;
  `
);

const ReviewText = styled.p(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans";
    font-size: 14px;
    text-align: justify;
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
    font-family: "Open Sans";
    font-size: 14px;
    color: ${theme.highlight};

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
    background-color: ${theme.highlight};
    border-radius: 100%;
    border: none;
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
`;

const RightArrow = styled.img`
  height: 11px;
  width: 17px;
  transform: rotate(90deg);
`;

interface IndicatorProps extends PropsWithTheme {
  highlight: boolean;
}

const Indicator = styled.div(
  ({ theme, highlight }: IndicatorProps) => css`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 0 4px;
    background: ${highlight ? theme.highlight : theme.lightGray};
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
