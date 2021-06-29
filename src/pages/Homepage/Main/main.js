import React from "react";
import TopMain from "./components/topMain";
import SportsMain from "./components/mainSports";
import TechMain from "./components/mainTech";
import HealthMain from "./components/mainHealth";
import InternationalMain from "./components/mainInternational";

const MainSection = () => {
  return (
    <React.Fragment>
      <TopMain />
      <SportsMain />
      <TechMain />
      <HealthMain />
      <InternationalMain />
    </React.Fragment>
  );
};

export default MainSection;
