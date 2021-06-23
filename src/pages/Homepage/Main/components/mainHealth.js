import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SimpleGrid,
  Box,
  Container,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";

import { getHealthNews } from "../../../../store/news-actions";

const MainHealth = () => {
  const healthNews = useSelector((state) => state.healthNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHealthNews());
  }, [dispatch]);
  return (
    <Container margin="64" h="400px" width="auto">
      <Heading marginLeft="48">Health</Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Box height="300px">
          <Box
            margin="10"
            backgroundImage={healthNews && healthNews[0].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            marginTop="9"
            height="280px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {healthNews && healthNews[0].title}
            </Text>
          </Center>
        </Box>
        <Box height="300px">
          <Box
            margin="10"
            backgroundImage={healthNews && healthNews[1].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            marginTop="9"
            height="280px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {healthNews && healthNews[1].title}
            </Text>
          </Center>
        </Box>
        <Box height="300px">
          <Box
            margin="10"
            backgroundImage={healthNews && healthNews[2].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            marginTop="9"
            height="280px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {healthNews && healthNews[2].title}
            </Text>
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default MainHealth;
