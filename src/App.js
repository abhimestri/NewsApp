import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <React.Fragment>
      <ChakraProvider>
        <Homepage />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
