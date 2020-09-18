import styled from "styled-components";

const Footer = styled.footer`
  background: white;
  height: 70px;
  display: flex;
  align-items: center;
`;

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
