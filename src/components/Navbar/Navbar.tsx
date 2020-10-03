import React, { useState } from "react";
import Styled from "./styles";
import { useHistory } from "react-router-dom";
import holisticArtsLogo from "../../images/HolisticArtsLogo.png";
import menuIcon from "../../images/MenuIcon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const history = useHistory();

  const handleToggleMenuOpen = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <Styled.Navbar>
      <Styled.LogoImage
        src={holisticArtsLogo}
        alt="Holistic Arts, LLC"
        onClick={() => history.push("/")}
      />
      <Styled.HamburgerMenu
        src={menuIcon}
        alt="menu icon"
        onClick={handleToggleMenuOpen}
      />
      <Styled.ScreenOverlay
        isOpen={isMenuOpen}
        onClick={handleToggleMenuOpen}
      />
      <Styled.Menu isOpen={isMenuOpen} onClick={handleToggleMenuOpen}>
        <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink to="/">FAQ</Styled.NavbarLink>
        <Styled.NavbarLink to="/">TESTIMONIALS</Styled.NavbarLink>
        <Styled.NavbarLink to="/consultation">CONSULT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">CONTACT</Styled.NavbarLink>
        <Styled.NavbarLink to="/resources">RESOURCES</Styled.NavbarLink>
      </Styled.Menu>
      <Styled.NavbarLinkContainer>
        <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink to="/">FAQ</Styled.NavbarLink>
        <Styled.NavbarLink to="/">TESTIMONIALS</Styled.NavbarLink>
        <Styled.NavbarLink to="/consultation">CONSULT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">CONTACT</Styled.NavbarLink>
        <Styled.NavbarLink to="/resources">RESOURCES</Styled.NavbarLink>
      </Styled.NavbarLinkContainer>
    </Styled.Navbar>
  );
};

export default Navbar;
