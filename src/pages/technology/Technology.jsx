import React from "react";
import { SectionWrapper } from "../../styles/GeneralStyles";
import desktop from "../../resources/assets/technology/background-technology-desktop.jpg";
import tablet from "../../resources/assets/technology/background-technology-tablet.jpg";
import mobile from "../../resources/assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  return (
    <SectionWrapper img={[desktop, tablet, mobile]}>Technology</SectionWrapper>
  );
};

export default Technology;
