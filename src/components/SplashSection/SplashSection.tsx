import React from "react";
import Styled from "./styles";
import family from "../../images/Family.jpg";

const SplashSection = () => {
  return (
    <Styled.SplashSection>
      <Styled.BackgroundImage />
      <Styled.Content>
        <Styled.Image src={family} alt="Family" />
        <Styled.QuoteWrapper>
          <Styled.AboutHomeopathySection>
            <Styled.Headline>Homeopathy</Styled.Headline>
            <Styled.Subheader>The Natural Healing Art</Styled.Subheader>
            <Styled.Text>
              {`
              Homeopathy re-establishes and strengthens the body’s predisposition for health because it treats the body’s innate capacity to heal itself. Mental, emotional and physical are treated as one dynamic disturbance. 
              
              It is a holistic modality that treats the person, not the disease as it is termed in medicine, so all conditions have a potential for resolution. 
              
              It has been a safe and practical healing art for over 200 years. Homeopathy is 100 percent non-toxic, non-addictive and U.S. FDA approved. Many remedies are available over the counter from health food stores or are available from natural care pharmacies worldwide.
              `}
            </Styled.Text>
          </Styled.AboutHomeopathySection>
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
      </Styled.Content>
    </Styled.SplashSection>
  );
};

export default SplashSection;
