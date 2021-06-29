import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Center,
  Text,
  Box,
  Link,
  Heading,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { getInternationalNews } from "../../../../store/news-actions";

const MainInternational = () => {
  const internationalNews = useSelector((state) => state.internationalNewsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInternationalNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Flex mt="20">
        <Heading marginLeft={{ base: "16", md: "28" }}>International</Heading>
        <Spacer />
        <Link mt="2" mr={{ base: "5", md: "20" }}>
          <NavLink to="/international">See more</NavLink>
        </Link>
      </Flex>
      <Box display={{ md: "flex" }} w="9xl" m="10" mt="0">
        <Box w="full" m="4" height="auto">
          <Box
            backgroundImage={internationalNews && internationalNews[0].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text m="1" fontSize="20px">
              {internationalNews && internationalNews[0].title}
            </Text>
          </Center>
        </Box>
        <Box w="full" m="4" height="auto">
          <Box
            backgroundImage={internationalNews && internationalNews[1].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text m="1" fontSize="20px">
              {internationalNews && internationalNews[1].title}
            </Text>
          </Center>
        </Box>
        <Box w="full" m="4" height="auto">
          <Box
            backgroundImage={internationalNews && internationalNews[2].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text m="1" fontSize="20px">
              {internationalNews && internationalNews[2].title}
            </Text>
          </Center>
        </Box>
        <Box w="full" m="4" height="auto">
          <Box
            backgroundImage={internationalNews && internationalNews[3].image}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="180px"
          ></Box>
          <Center>
            <Text m="1" fontSize="20px">
              {internationalNews && internationalNews[3].title}
            </Text>
          </Center>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainInternational;
