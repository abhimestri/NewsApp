import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import Navigation from "./Navigation/Navigation";
import MainSection from "./Main/main";
import Footer from "./Footer/Footer";
import {
  BusinessNews,
  TechnologyNews,
  FashionNews,
  CurrentAffairsNews,
  EconomicsNews,
  EntertainmentNews,
  SportsNews,
  PoliticalNews,
  InternationalNews,
} from "./Navigation/components/index";
import SearchedNews from "./Navigation/components/searchedNews";
import SideDrawer from "./Navigation/container/sideDrawer";
const HomePage = () => {
  const date = new Date();
  return (
    <React.Fragment>
      <SideDrawer />
      <Flex>
        <Text fontSize="28px" ml="10" mt="2">
          DailyUpdate
        </Text>
        <Spacer />
        <Text
          fontSize="14px"
          ml={{ base: "15", md: "0" }}
          mr="10"
          w="55"
          mt="4"
        >
          {date.toString()}
        </Text>
      </Flex>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <MainSection />
        </Route>
        <Route path="/business">
          <BusinessNews />
        </Route>
        <Route path="/technology">
          <TechnologyNews />
        </Route>
        <Route path="/fashion" exact>
          <FashionNews />
        </Route>
        <Route path="/politics">
          <PoliticalNews />
        </Route>
        <Route path="/entertainment">
          <EntertainmentNews />
        </Route>
        <Route path="/sports">
          <SportsNews />
        </Route>
        <Route path="/current-affairs">
          <CurrentAffairsNews />
        </Route>
        <Route path="/economics">
          <EconomicsNews />
        </Route>
        <Route path="/international">
          <InternationalNews />
        </Route>
        <Route path="/searched/:id">
          <SearchedNews />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
