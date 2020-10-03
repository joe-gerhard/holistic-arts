import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { PropsWithTheme } from "../../styles/theme";

const Navbar = styled.nav(
  ({ theme }: PropsWithTheme) => css`
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0px;
    background: ${theme.secondary};
    border-bottom: 2px solid ${theme.gray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    z-index: 100;
  `
);

const LogoImage = styled.img`
  width: 70%;
  max-width: 300px;
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

interface MenuProps extends PropsWithTheme {
  isOpen: boolean;
}

const Menu = styled.div(
  ({ theme, isOpen }: MenuProps) => css`
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 20px 0;
    top: 70px;
    right: 0px;
    width: 100vw;
    max-width: 300px;
    border: 2px solid ${theme.gray};
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    background: ${theme.secondary};

    @media (max-width: 810px) {
      display: ${isOpen ? "flex" : "none"};
    }
  `
);

interface ScreenOverlayProps {
  isOpen: boolean;
}
const ScreenOverlay = styled.div(
  ({ isOpen }: ScreenOverlayProps) => css`
    display: none;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;

    @media (max-width: 810px) {
      display: ${isOpen ? "block" : "none"};
    }
  `
);

const NavbarLink = styled(Link)(
  ({ theme }: PropsWithTheme) => css`
    font-family: "Open Sans", Impact;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: ${theme.gray};
    margin: 0 20px;

    @media (max-width: 810px) {
      margin: 20px 0;
    }
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
    @media (max-width: 810px) {
      margin-left: 0;
    }
  `
);

export default {
  Navbar,
  LogoImage,
  NavbarLinkContainer,
  HamburgerMenu,
  Menu,
  ScreenOverlay,
  NavbarLink,
  CallToActionLink,
};
