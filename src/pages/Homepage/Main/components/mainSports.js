import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { getSportsNews } from "../../../../store/news-actions";

const MainSports = () => {
  const sportsNews = useSelector((state) => state.sportsNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSportsNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Heading marginLeft={{ base: "14", md: "24" }}>sports</Heading>
      <Grid
        h="auto"
        templateRows="repeat(1, 1fr)"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        gap={12}
        mt="9"
        marginLeft={{ sm: "10", md: "20" }}
        marginRight="5"
      >
        <GridItem rowSpan={1} colSpan={{ sm: 7, md: 3 }}>
          <Box h="auto" border="1px solid #ccc">
            <Box
              h={{ base: "200px", md: "550px" }}
              backgroundImage={sportsNews && sportsNews[0].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box>
              <Text m="5">{sportsNews && sportsNews[0].title}</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={{ sm: 7, md: 2 }}>
          <Box border="1px solid #ccc" mb="4" height="auto">
            <Box display="flex" h="auto">
              <Box
                backgroundImage={sportsNews && sportsNews[1].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                height="110px"
                width="140px"
                m="2"
              ></Box>
              <Text w="auto" mt="3">
                {sportsNews && sportsNews[1].title}
              </Text>
            </Box>
          </Box>
          <Box border="1px solid #ccc" mb="4" height="auto">
            <Box display="flex" h="auto">
              <Box
                backgroundImage={sportsNews && sportsNews[2].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                height="110px"
                width="140px"
                m="2"
              ></Box>
              <Text w="auto" mt="3">
                {sportsNews && sportsNews[2].title}
              </Text>
            </Box>
          </Box>
          <Box border="1px solid #ccc" mb="4" height="auto">
            <Box display="flex" h="auto">
              <Box
                backgroundImage={sportsNews && sportsNews[3].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                height="110px"
                width="140px"
                m="2"
              ></Box>
              <Text mt="3">{sportsNews && sportsNews[3].title}</Text>
            </Box>
          </Box>
          <Box border="1px solid #ccc" mb="4" height="auto">
            <Box display="flex" h="auto">
              <Box
                backgroundImage={sportsNews && sportsNews[4].image}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                height="110px"
                width="140px"
                m="2"
              ></Box>
              <Text w="auto" mt="3">
                {sportsNews && sportsNews[4].title}
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default MainSports;
