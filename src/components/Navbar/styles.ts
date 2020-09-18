import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { PropsWithTheme } from "../../styles/theme";

const Navbar = styled.nav(
  ({ theme }: PropsWithTheme) => css`
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0px;
    background: ${theme.light};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    z-index: 100;
  `
);

const LogoImage = styled.img`
  width: 70%;
  max-width: 420px;
  object-fit: scale-down;

  &:hover {
    cursor: pointer;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 810px) {
    display: none;
  }
`;

const HamburgerMenu = styled.img`
  display: none;

  @media (max-width: 810px) {
    display: block;
  }
`;

const NavbarLink = styled(Link)(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans", Impact;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: ${theme.gray};
  `
);

const CallToActionLink = styled(NavbarLink)(
  ({ theme }: PropsWithTheme) => css`
    margin-left: 20px;
    color: ${theme.light};
    background: ${theme.highlight};
    height: 40px;
    width: 234px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export default {
  Navbar,
  LogoImage,
  NavbarLinkContainer,
  HamburgerMenu,
  NavbarLink,
  CallToActionLink,
};
