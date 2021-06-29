import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";

import { getPoliticalNews } from "../../../../store/news-actions";

const MainSection = () => {
  const politicalNews = useSelector((state) => state.politicalNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPoliticalNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid
        templateRows={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
        gap={6}
      >
        <GridItem rowSpan={2} colSpan={3}>
          <Box h="auto" m="8" border="1px solid #ccc">
            <Box
              h={{ base: "250px", sm: "300px", md: "700px" }}
              backgroundImage={politicalNews && politicalNews[0].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box m="5">
              <Text>{politicalNews && politicalNews[2].title}</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box h="auto" m="8" mr={{ sm: "2", md: "8" }} border="1px solid #ccc">
            <Box
              h="250px"
              backgroundImage={politicalNews && politicalNews[1].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box>
              <Text m="5">{politicalNews && politicalNews[2].title}</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box h="auto" m="8" mr={{ sm: "2", md: "8" }} border="1px solid #ccc">
            <Box
              h="250px"
              backgroundImage={politicalNews && politicalNews[2].image}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box>
              <Text m="5">{politicalNews && politicalNews[2].title}</Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Spacer h="100px" />
    </React.Fragment>
  );
};

export default MainSection;
