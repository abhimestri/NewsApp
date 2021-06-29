import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const DateToday = () => {
  const toast = useToast();
  // const [valueEmail, setValueEmail] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const emailRef = useRef();

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(emailRef.current.value);
  };

  const submitForm = () => {
    if (validateEmail()) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Unsuccessful!",
        description: "Enter a valid email",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  const phoneHandler = (e) => {
    setValuePhone(e.target.value);
  };

  return (
    <Box display={{ md: "flex" }} w="full" marginTop="64" bg="gray" h="500px">
      <Box m="10">
        <Center display="block">
          <Text fontSize="40px">DailyUpdate</Text>
          <Box>
            <Text fontSize="22px">Contact us at:</Text>
            <Text>Phone : +81 7832-9974-67</Text>
            <Text>Email : ducustomercare@gmail.com</Text>
          </Box>
        </Center>
      </Box>
      <Spacer />
      <Box
        ml={{ base: "10", md: "0" }}
        mr={{ md: "20" }}
        mt="10"
        mb="10"
        width="300px"
      >
        <Text mb="5">
          To get notificatinos on daily news please provide with email and phone
          no.
        </Text>
        <Stack spacing={6}>
          <Input
            ref={emailRef}
            type="text"
            fontSize="15px"
            pl="12"
            border="1px solid #ccc"
            borderRadius="5px"
            w="300px"
            height="40px"
            placeholder="Email"
            outline="none"
          />
          <Input
            onChange={phoneHandler}
            type="number"
            fontSize="15px"
            pl="12"
            border="1px solid #ccc"
            borderRadius="5px"
            w="300px"
            height="40px"
            placeholder="Phone Number"
            outline="none"
            value={valuePhone}
          />
          <Button
            color="white"
            w="315px"
            backgroundColor="#333"
            border="1px solid #000"
            borderRadius="5px"
            height="40px"
            cursor="pointer"
            onClick={submitForm}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default DateToday;
