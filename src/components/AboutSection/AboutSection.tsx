import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";
import profilePicture from "../../images/HeadshotSmall.jpg";

const AboutSection = () => {
  return (
    <Styled.AboutSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.ProfilePicture src={profilePicture} alt="Barbara" />
          <Styled.Name>Barbara Lowry, DSH, CCH</Styled.Name>
          <Styled.Credentials>
            {`Certified by The Council for Homeopathic Certification (U.S.A.)
            Graduate, School of Homeopathy New York, Joanna E. Daly, CCH, director`}
          </Styled.Credentials>
          <Styled.Bio>
            {`
            I discovered the efficacy of homeopathy after the birth of my son in the 1980s when his chronic ear infections were healed rapidly and forever. It was my own case of pneumonia that was healed with the help of a homeopathic practitioner that led me to enroll in school to become a homeopath to help my family and begin my own practice.
            
            I am grateful to have been taught by some of the most experienced homeopaths in the world:  Joanna Daly, Dr. Dinesh Chauhan, Dr. Rajan Sankaran, and Michael Yakir. 
            
            I formed Holistic Arts, LLC for my fulltime practice in New Jersey in 2008 and currently work with clients of all ages worldwide via Zoom / Skype, and in person – from my new location in Fort Worth, Texas as of January 2021.
            `}
          </Styled.Bio>
        </Styled.Card>
      </ContentWrapper>
    </Styled.AboutSection>
  );
};

export default AboutSection;
