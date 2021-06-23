import React from "react";
import TopMain from "./components/topMain";
import SportsMain from "./components/mainSports";
import TechMain from "./components/mainTech";
import HealthMain from "./components/mainHealth";
import InternationalMain from "./components/mainInternational";
import { Spacer, Center, Container } from "@chakra-ui/react";

const MainSection = () => {
  return (
    <React.Fragment>
      <Center>
        <Container>
          <TopMain />
          <SportsMain />
          <Spacer h="60px" />
          <TechMain />
          <HealthMain />
          <InternationalMain />
        </Container>
      </Center>
    </React.Fragment>
  );
};

export default MainSection;
