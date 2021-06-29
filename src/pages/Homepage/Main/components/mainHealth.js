import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Box, Text, Heading, Center } from "@chakra-ui/react";

import { getHealthNews } from "../../../../store/news-actions";

const MainHealth = () => {
  const healthNews = useSelector((state) => state.healthNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHealthNews());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Box h="auto" mt="10">
        <Heading marginLeft={{ base: "12", md: "32" }} mt="24">
          Health
        </Heading>
        <SimpleGrid h="auto" mb="5" columns={{ base: 1, md: 3 }} spacing={10}>
          <Box height="auto">
            <Box
              // margin="10"
              backgroundImage={healthNews && healthNews[0].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              marginTop="9"
              mb="0"
              height="280px"
            ></Box>
            <Center>
              <Text ml="10" mt="3" fontSize="20px">
                {healthNews && healthNews[0].title}
              </Text>
            </Center>
          </Box>
          <Box height="auto">
            <Box
              margin="10"
              backgroundImage={healthNews && healthNews[1].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              marginTop="9"
              mb="0"
              height="280px"
            ></Box>
            <Center>
              <Text ml="10" mt="3" fontSize="20px">
                {healthNews && healthNews[1].title}
              </Text>
            </Center>
          </Box>
          <Box height="auto">
            <Box
              margin="10"
              backgroundImage={healthNews && healthNews[2].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              marginTop="9"
              mb="0"
              height="280px"
            ></Box>
            <Center>
              <Text ml="10" mt="3" fontSize="20px">
                {healthNews && healthNews[2].title}
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </React.Fragment>
  );
};

export default MainHealth;
