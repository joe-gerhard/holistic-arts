import React from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";

const ResourcesSection = () => {
  return (
    <Styled.ResourcesSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.Headline>
            Introductory Information About Homeopathy
          </Styled.Headline>

          <Styled.Header>Beyond Flat Earth Medicine: Homeopathy</Styled.Header>
          <Styled.Subheader>Timothy R. Dooley, ND, MD</Styled.Subheader>
          <Styled.Text>
            A brief and very good introductory book about the effectiveness of
            Homeopathy and how it works. Read/download the entire first edition
            of the book or purchase the second edition here:
          </Styled.Text>
          <Styled.Link href="http://www.beyondflatearth.com" target="_blank">
            http://www.beyondflatearth.com
          </Styled.Link>
          <Styled.Header>National Center for Homeopathy</Styled.Header>
          <Styled.Text>
            An open-membership organization whose mission is to promote health
            through homeopathy. The organization provides general education to
            the public about homeopathy, and specific education to homeopaths in
            the U.S. Their website is filled with helpful information. Consider
            joining the NCH to receive their monthly magazine, Homeopathy Today,
            a great resource for anyone interested in homeopathy.
          </Styled.Text>
          <Styled.Link
            href="http://nationalcenterforhomeopathy.org"
            target="_blank"
          >
            http://nationalcenterforhomeopathy.org
          </Styled.Link>
          <Styled.Header>Homeopathy for Everyone</Styled.Header>
          <Styled.Text>
            Provides free, professional content and services for homeopathic
            professionals, students and the general public. Information may be
            searched within the site for just about any topic in the homeopathic
            realm.
          </Styled.Text>
          <Styled.Link href="http://www.hpathy.com" target="_blank">
            http://www.beyondflatearth.com
          </Styled.Link>
        </Styled.Card>
      </ContentWrapper>
    </Styled.ResourcesSection>
  );
};

export default ResourcesSection;
