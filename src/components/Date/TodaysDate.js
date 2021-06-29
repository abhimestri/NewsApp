import React from "react";
import { Text } from "@chakra-ui/react";
const DateToday = () => {
  const date = new Date();
  return (
    <React.Fragment>
      <Text align="right">{date.toString()}</Text>
    </React.Fragment>
  );
};

export default DateToday;
