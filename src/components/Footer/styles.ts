import styled, { css } from "styled-components";
import { PropsWithTheme } from "../../styles/theme";

const Footer = styled.footer(
  ({ theme }: PropsWithTheme) => css`
    width: 100%;
    background: ${theme.secondary};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid ${theme.gray};
  `
);

const Logo = styled.img`
  width: 45px;

  @media (max-width: 350px) {
    width: 35px;
  }
`;

const CopyrightText = styled.span`
  font-family: "Open Sans";
  font-size: 14px;
  margin-left: 20px;

  @media (max-width: 350px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export default {
  Footer,
  Logo,
  CopyrightText,
};
