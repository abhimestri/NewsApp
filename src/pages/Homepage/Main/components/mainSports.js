import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import { getSportsNews } from "../../../../store/news-actions";

const MainSports = () => {
  const sportsNews = useSelector((state) => state.sportsNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSportsNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Container marginLeft="64" marginRight="64">
        <Heading marginLeft="48">sports</Heading>
        <Box h="1px" w="full" margin="10" marginBottom="16" bg="black"></Box>
        <Grid
          h="500px"
          w="3xl"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={12}
          marginLeft="48"
          marginRight="48"
        >
          <GridItem rowSpan={1} colSpan={3}>
            <Box
              overflow="scroll"
              h="550px"
              backgroundImage={sportsNews && sportsNews[0].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            >
              {sportsNews && sportsNews[0].title}
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              border="1px solid #ccc"
              overflow="scroll"
              height="125px"
              margin="10"
            >
              <Flex>
                <Box
                  backgroundImage={sportsNews && sportsNews[1].image}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  height="110px"
                  width="140px"
                  margin="5"
                ></Box>
                <Text w="400px">{sportsNews && sportsNews[1].title}</Text>
              </Flex>
            </Box>
            <Box
              border="1px solid #ccc"
              overflow="scroll"
              height="125px"
              margin="10"
            >
              <Flex>
                <Box
                  backgroundImage={sportsNews && sportsNews[2].image}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  height="110px"
                  width="140px"
                  margin="5"
                ></Box>
                <Text w="400px">{sportsNews && sportsNews[2].title}</Text>
              </Flex>
            </Box>
            <Box
              border="1px solid #ccc"
              overflow="scroll"
              height="125px"
              margin="10"
            >
              <Flex>
                <Box
                  backgroundImage={sportsNews && sportsNews[3].image}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  height="110px"
                  width="140px"
                  margin="5"
                ></Box>
                <Text w="400px">{sportsNews && sportsNews[3].title}</Text>
              </Flex>
            </Box>
            <Box
              border="1px solid #ccc"
              overflow="scroll"
              height="125px"
              margin="10"
            >
              <Flex>
                <Box
                  backgroundImage={sportsNews && sportsNews[4].image}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  height="110px"
                  width="140px"
                  margin="5"
                ></Box>
                <Text w="400px">{sportsNews && sportsNews[4].title}</Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainSports;
