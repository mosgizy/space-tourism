import React from "react";
import { SectionWrapper } from "../../styles/GeneralStyles";
import desktop from "../../resources/assets/crew/background-crew-desktop.jpg";
import tablet from "../../resources/assets/crew/background-crew-tablet.jpg";
import mobile from "../../resources/assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  return <SectionWrapper img={[desktop, tablet, mobile]}>Crew</SectionWrapper>;
};

export default Crew;
