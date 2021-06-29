import { Center, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useSelector } from "react-redux";
import RenderNews from "../../../../Hooks/render-news";

const SearchedNews = () => {
  const searchedNews = useSelector((state) => state.searchedNewsList);
  if (searchedNews !== null) {
    if (searchedNews.length === 0) {
      return (
        <Center>
          <Text fontSize="32px">No news found</Text>
        </Center>
      );
    } else {
      return <RenderNews newsList={searchedNews} heading={null} />;
    }
  } else {
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    );
  }
};

export default SearchedNews;
