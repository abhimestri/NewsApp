import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { FormElements } from "./container/formElements";
import { NavElements } from "./container/navElements";

import { getSearchedNews } from "../../../store/news-actions";
import { Flex, Spacer } from "@chakra-ui/layout";
import { useHistory } from "react-router";
const Navigation = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const history = useHistory();

  const handleSearchNews = () => {
    if (searchRef.current.value) {
      dispatch(getSearchedNews(searchRef.current.value));
      history.push(`/searched/${searchRef.current.value}`);
    }
    searchRef.current.value = "";
  };

  return (
    <React.Fragment>
      <Flex>
        <NavElements />
        <Spacer />
        <FormElements
          searchRef={searchRef}
          handleSearchNews={() => handleSearchNews()}
        />
      </Flex>
    </React.Fragment>
  );
};

export default Navigation;
