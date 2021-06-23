import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";

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
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        margin="24"
      >
        <GridItem rowSpan={2} colSpan={3}>
          <Box
            h="800px"
            backgroundImage={politicalNews && politicalNews[0].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            margin="28"
          >
            Hello
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            h="300px"
            backgroundImage={politicalNews && politicalNews[1].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            margin="28"
          ></Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            h="300px"
            backgroundImage={politicalNews && politicalNews[2].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            margin="28"
          ></Box>
        </GridItem>
      </Grid>
      <Spacer h="100px" />
    </React.Fragment>
  );
};

export default MainSection;
