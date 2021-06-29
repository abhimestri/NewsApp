import React from "react";
import { SimpleGrid, Box, Text, Heading, Center } from "@chakra-ui/react";

const renderNews = (props) => {
  let list;
  if (props.newsList) {
    list = props.newsList.map((el) => {
      return (
        <Box border="1px solid #ccc" w="full" height="auto">
          <Box display={{ md: "flex" }}>
            <Box
              ml={{ base: "7", md: "10" }}
              mt="7"
              backgroundImage={el.image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              height="200px"
              width="64"
              border="1px solid #000"
              mb="8"
              mr="8"
            ></Box>
            <Box mb="5" pl={{ base: "6", md: "10" }} mt="7" w="full" mr="8">
              <Text mt="2" fontSize="12px">
                {el.published_at}
              </Text>
              <Text mt="2" fontSize="20px">
                {el.title}
              </Text>
              <Text mt="2" fontSize="14px">
                {el.description}
              </Text>
              <a href={el.url}>
                <Text mt="5" fontSize="17px">
                  Deatils
                </Text>
              </a>
            </Box>
          </Box>
        </Box>
      );
    });
  } else {
    list = (
      <Center>
        <Text>Something went wrong, please try again later!</Text>
      </Center>
    );
  }

  return (
    <React.Fragment>
      <Heading ml="26" mt="10">
        {props.heading !== null ? props.heading : ""}
      </Heading>
      <SimpleGrid mt="10" ml="10" mr="10" columns={1} spacing={10}>
        {list}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default renderNews;
