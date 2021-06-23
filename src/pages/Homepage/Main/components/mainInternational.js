import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SimpleGrid,
  Center,
  Text,
  Box,
  Container,
  Heading,
  Link,
} from "@chakra-ui/react";

import { getInternationalNews } from "../../../../store/news-actions";

const MainInternational = () => {
  const internationalNews = useSelector((state) => state.internationalNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInternationalNews());
  }, [dispatch]);

  return (
    <Container margin="10" width="auto">
      <Link float="right" margin="10" marginRight="20" marginBottom="0">
        See more
      </Link>
      <Heading marginLeft="48">International</Heading>
      <SimpleGrid columns={4} spacing={10}>
        <Box margin="12" height="200px">
          <Box
            backgroundImage={internationalNews && internationalNews[0].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {internationalNews && internationalNews[0].title}
            </Text>
          </Center>
        </Box>
        <Box margin="12" height="200px">
          <Box
            backgroundImage={internationalNews && internationalNews[1].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {internationalNews && internationalNews[1].title}
            </Text>
          </Center>
        </Box>
        <Box margin="12" height="200px">
          <Box
            backgroundImage={internationalNews && internationalNews[2].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {internationalNews && internationalNews[2].title}
            </Text>
          </Center>
        </Box>
        <Box margin="12" height="200px">
          <Box
            backgroundImage={internationalNews && internationalNews[3].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text ml="24" fontSize="20px">
              {internationalNews && internationalNews[3].title}
            </Text>
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default MainInternational;
