import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Text, GridItem, Heading, Center } from "@chakra-ui/react";

import { getTechNews } from "../../../../store/news-actions";

const MainTech = () => {
  const technologyNews = useSelector((state) => state.technologyNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Heading marginLeft={{ base: "22", md: "32" }} mt="36">
        Science and Technology
      </Heading>
      <Grid h="auto">
        <GridItem>
          <Grid
            gap={12}
            mr="8"
            ml="8"
            templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[0].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[0].title}
                </Text>
              </Center>
            </Box>
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[1].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[1].title}
                </Text>
              </Center>
            </Box>
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[2].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[2].title}
                </Text>
              </Center>
            </Box>
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[3].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[3].title}
                </Text>
              </Center>
            </Box>
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[4].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[4].title}
                </Text>
              </Center>
            </Box>
            <Box height="250px" margin="18" mb="20">
              <Box
                overflow="scroll"
                height="240px"
                backgroundImage={technologyNews && technologyNews[5].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              ></Box>
              <Center>
                <Text fontSize="20px">
                  {technologyNews && technologyNews[5].title}
                </Text>
              </Center>
            </Box>
          </Grid>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default MainTech;
