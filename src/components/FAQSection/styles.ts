import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";
import flowerOfLife from "../../images/FlowerOfLife.webp";

const FAQSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    background: ${theme.secondary};
  `
);

const Content = styled(ContentWrapper)`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px);
  @media (max-width: 810px) {
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

const H2 = styled.h2(({ theme }: PropsWithTheme) => css`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.highlight};
  margin-bottom: 20px;
`);

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
    margin-bottom: 50px;
    width: 100%;
    max-width: 650px;
    border-radius: 10px;

    @media (max-width: 500px) {
      padding: 60px 20px;
    }
  `
);

export default {
  FAQSection,
  Content,
  BackgroundImage,
  Card,
  H2,
};


