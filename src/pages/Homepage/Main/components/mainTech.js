import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Grid,
  Text,
  GridItem,
  Heading,
  Center,
} from "@chakra-ui/react";

import { getTechNews } from "../../../../store/news-actions";

const MainTech = () => {
  const technologyNews = useSelector((state) => state.technologyNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechNews());
  }, [dispatch]);

  return (
    <Container marginTop="96" h="1000px">
      <Heading marginLeft="48">Science and Technology</Heading>
      <Grid
        h="500px"
        w="3xl"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={6}
        marginLeft="48"
        marginRight="48"
      >
        <GridItem>
          <Grid templateColumns="repeat(2, 1fr)">
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="180px"
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
                height="180px"
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
                height="180px"
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
                height="180px"
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
                height="180px"
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
            <Box height="250px" margin="18">
              <Box
                overflow="scroll"
                height="180px"
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
    </Container>
  );
};

export default MainTech;
