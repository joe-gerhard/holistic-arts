import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const AboutSection = styled(Section)(
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
    align-items: center;
    padding: 90px 0px 60px 0px;
    margin-top: 125px;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 100px;
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
  `
);

const ProfilePicture = styled.img(
  ({ theme }: PropsWithTheme) => css`
    border-radius: 100%;
    border: 2px solid ${theme.primary + 15};
    width: 150px;
    height: 150px;
    background: ${theme.lightGray};
    position: absolute;
    top: -75px;
  `
);

const Name = styled.h2(
  ({ theme }: PropsWithTheme) => css`
    color: ${theme.highlight};
    width: 90%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 350px) {
      font-size: 18px;
    }
  `
);

const Credentials = styled.h5(
  ({ theme }: PropsWithTheme) => css`
    font-size: 12px;
    color: ${theme.gray};
    max-width: 450px;
    width: 90%;
    font-weight: normal;
    text-align: center;
  `
);

const Bio = styled.p(
  ({ theme }: PropsWithTheme) => css`
    white-space: pre-line;
    width: 90%;
    max-width: 500px;
    color: ${theme.dark};
  `
);

export default {
  AboutSection,
  BackgroundImage,
  Card,
  ProfilePicture,
  Name,
  Credentials,
  Bio,
};
