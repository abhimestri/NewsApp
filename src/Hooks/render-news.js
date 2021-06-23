import React from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";

const renderNews = (props) => {
  let news;
  if (props.newsList) {
    news = props.newsList.map((el) => {
      return (
        <Box height="400px" margin="16">
          <Box
            margin="10"
            backgroundImage={el.image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            marginTop="9"
            height="280px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {el.title}
            </Text>
          </Center>
        </Box>
      );
    });
  }

  return (
    <Container margin="64" width="auto">
      <Heading marginLeft="48">
        {props.heading !== null ? props.heading : ""}
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {news}
      </SimpleGrid>
    </Container>
  );
};

export default renderNews;
