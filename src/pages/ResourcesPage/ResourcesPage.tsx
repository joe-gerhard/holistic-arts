import React from "react";
import Styled from "./styles";
import ResourcesSection from "../../components/ResourcesSection";
import Footer from "../../components/Footer";

const ResourcesPage = () => {
  return (
    <Styled.ResourcesPage>
      <ResourcesSection />
      <Footer />
    </Styled.ResourcesPage>
  );
};

export default ResourcesPage;
