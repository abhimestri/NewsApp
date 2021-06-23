import React from "react";
// import { Container } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import DateToday from "../../components/Date/TodaysDate";
import MainSection from "./Main/main";
import Footer from "./Footer/Footer";
import BusinessNews from "./Navigation/components/businessNews";
import TechNews from "./Navigation/components/technologyNews";
const HomePage = () => {
  return (
    <React.Fragment>
      <DateToday />
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <MainSection />
        </Route>
        <Route path="/business">
          <BusinessNews />
        </Route>
        <Route path="/technology">
          <TechNews />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
