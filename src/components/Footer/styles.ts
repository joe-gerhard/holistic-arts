import styled from "styled-components";

const Footer = styled.footer`
  background: white;
  height: 70px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 45px;
`;

const CopyrightText = styled.span`
  font-family: "Open Sans";
  font-size: 14px;
  margin-left: 20px;
`;

export default {
  Footer,
  Logo,
  CopyrightText,
};
