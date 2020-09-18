import styled, { css } from "styled-components";
import { Section } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.png";

const AboutSection = styled(Section)(
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
    align-items: center;
    padding: 145px 0px 60px 0px;
    margin-top: 125px;
    font-family: "Open Sans";
    margin-bottom: 100px;
    width: 100%;
    max-width: 650px;
  `
);

const ProfilePicture = styled.img(
  ({ theme }: PropsWithTheme) => css`
    border-radius: 100%;
    width: 250px;
    height: 250px;
    background: ${theme.lightGray};
    position: absolute;
    top: -125px;
    border: 1px solid ${theme.gray};
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
    max-width: 350px;
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
