import React from "react";
import Styled from "./styles";
import icon from "../../images/Icon.png";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Logo src={icon} alt="Holistic Arts Logo" />
      <Styled.CopyrightText>
        © 2020 Holistic Arts LLC. All rights reserved.
      </Styled.CopyrightText>
    </Styled.Footer>
  );
};

export default Footer;
