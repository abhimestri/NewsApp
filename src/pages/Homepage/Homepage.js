import React from "react";
import { Route, Switch } from "react-router-dom";
import { Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";

import Navigation from "./Navigation/Navigation";
import DateToday from "../../components/Date/TodaysDate";
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
} from "./Navigation/components/index";
import SearchedNews from "./Navigation/components/searchedNews";

const HomePage = () => {
  const searchedList = useSelector((state) => state.searchedNewsList);
  console.log("in home");
  console.log(searchedList);
  console.log("=============");
  return (
    <React.Fragment>
      <Text top="-10" left="20" position="absolute" fontSize="24px">
        DailyUpdate
      </Text>
      <DateToday />
      <Navigation />
      <Switch>
        <Route path="/" exact>
          {searchedList ? <SearchedNews /> : <MainSection />}
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
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
