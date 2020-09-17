import React from "react";
import Styled from "./styles";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <Styled.Navbar>
      <Styled.LogoImage
        src="/HolisticArtsLogo.png"
        alt="Holistic Arts, LLC"
        onClick={() => history.push("/")}
      />
      <Styled.HamburgerMenu src="/MenuIcon.png" alt="menu icon" />
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
