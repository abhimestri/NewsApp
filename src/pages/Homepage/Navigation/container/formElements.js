import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Input } from "@chakra-ui/react";
export const FormElements = (props) => {
  return (
    <React.Fragment>
      <Box>
        <Box display={{ sm: "flex" }} m="6">
          <Input
            type="text"
            placeholder="search news"
            w={{ base: "270px", md: "300px" }}
            p="6"
            border="1px solid #ccc"
            borderRadius="5px"
            ref={props.searchRef}
          />
          <Button
            leftIcon={<SearchIcon />}
            onClick={props.handleSearchNews}
            ml="3"
            pr="2"
            h="50px"
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
