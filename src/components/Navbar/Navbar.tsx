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
        <Styled.CallToActionLink to="/consultation">
          SET UP A CONSULTATION
        </Styled.CallToActionLink>
        <Styled.NavbarLink to="/about">ABOUT US</Styled.NavbarLink>
      </Styled.Menu>
      <Styled.NavbarLinkContainer>
        <Styled.NavbarLink to="/about">ABOUT US</Styled.NavbarLink>
        <Styled.CallToActionLink to="/consultation">
          SET UP A CONSULTATION
        </Styled.CallToActionLink>
      </Styled.NavbarLinkContainer>
    </Styled.Navbar>
  );
};

export default Navbar;
