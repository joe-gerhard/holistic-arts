import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";
import family from "../../images/Family.png";

const SplashSection = () => {
  return (
    <Styled.SplashSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Image src={family} alt="Family" />
        <Styled.QuoteWrapper>
          <Styled.QuoteGroup>
            <Styled.Quote>
              Homeopathy is wholly capable of satisfying the therapeutic demands
              of this age better than any other system...
            </Styled.Quote>
            <Styled.QuoteAuthor>
              Charles Menninger M.D. <br />
              Founder of the Menninger Clinic
            </Styled.QuoteAuthor>
          </Styled.QuoteGroup>
        </Styled.QuoteWrapper>
      </ContentWrapper>
    </Styled.SplashSection>
  );
};

export default SplashSection;
