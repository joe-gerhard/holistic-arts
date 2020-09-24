import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";
import profilePicture from "../../images/HeadshotSmall.png";

const AboutSection = () => {
  return (
    <Styled.AboutSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.ProfilePicture src={profilePicture} alt="Barbara" />
          <Styled.Name>Barbara Lowry, DSH, CCH</Styled.Name>
          <Styled.Credentials>
            Certified by The Council for Homeopathic Certification (U.S.A.)
            Graduate, School of Homeopathy New York, Joanna E. Daly, CCH,
            director
          </Styled.Credentials>
          <Styled.Bio>
            {`
            I discovered the efficacy of homeopathy after the birth of my son in the 1980s when his chronic ear infections were healed rapidly and forever. It was my own case of pneumonia that was healed with the help of a homeopathic practitioner that led me to enroll in school to become a full time homeopath to help my family and begin my own practice. 
            
            I formed Holistic Arts, LLC for my full time practice in Mountain Lakes, New Jersey in 2008 and currently work with clients worldwide via Zoom / Skype, and in person in New Jersey and Doylestown, Pennsylvania. 
            
            In homeopathy, you heal the person not the disease so I do not specialize in any one area or demographic. I welcome inquiries if you would like more information about my individualized approach to healing.
            `}
          </Styled.Bio>
        </Styled.Card>
      </ContentWrapper>
    </Styled.AboutSection>
  );
};

export default AboutSection;
