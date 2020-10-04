import React, { useState } from "react";
import Styled from "./styles";
import { useHistory } from "react-router-dom";
import holisticArtsLogo from "../../images/HolisticArtsLogo.png";
import menuIcon from "../../images/MenuIcon.png";

interface NavbarProps {
  refs: {
    FAQRef: React.RefObject<HTMLDivElement | null>;
    testimonialRef: React.RefObject<HTMLDivElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  const { FAQRef, testimonialRef } = refs;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const history = useHistory();

  const handleToggleMenuOpen = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const handleNavigateToFAQ = () => {
    const navbarHeight = 70;
    let offsetTop = navbarHeight;

    if (FAQRef.current) {
      offsetTop = FAQRef.current.offsetTop;
    }

    if (history.location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        if (!FAQRef.current) return;
        window.scrollTo({
          left: 0,
          top: FAQRef.current.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }, 200);
    }

    window.scrollTo({
      left: 0,
      top: offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  const handleNavigateToTestimonials = () => {
    const navbarHeight = 70;
    let offsetTop = navbarHeight;

    if (testimonialRef.current) {
      offsetTop = testimonialRef.current.offsetTop;
    }

    if (history.location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        if (!testimonialRef.current) return;
        window.scrollTo({
          left: 0,
          top: testimonialRef.current.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }, 200);
    }

    window.scrollTo({
      left: 0,
      top: offsetTop - navbarHeight,
      behavior: "smooth",
    });
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
        <Styled.NavbarLink as="span" onClick={handleNavigateToFAQ}>
          FAQ
        </Styled.NavbarLink>
        <Styled.NavbarLink as="span" onClick={handleNavigateToTestimonials}>
          TESTIMONIALS
        </Styled.NavbarLink>
        <Styled.NavbarLink to="/consultation">CONSULT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">CONTACT</Styled.NavbarLink>
        <Styled.NavbarLink to="/resources">RESOURCES</Styled.NavbarLink>
      </Styled.Menu>
      <Styled.NavbarLinkContainer>
        <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink as="span" onClick={handleNavigateToFAQ}>
          FAQ
        </Styled.NavbarLink>
        <Styled.NavbarLink as="span" onClick={handleNavigateToTestimonials}>
          TESTIMONIALS
        </Styled.NavbarLink>
        <Styled.NavbarLink to="/consultation">CONSULT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">CONTACT</Styled.NavbarLink>
        <Styled.NavbarLink to="/resources">RESOURCES</Styled.NavbarLink>
      </Styled.NavbarLinkContainer>
    </Styled.Navbar>
  );
};

export default Navbar;
