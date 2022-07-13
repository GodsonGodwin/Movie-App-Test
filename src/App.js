import { chakra, Button } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    <Hero/>
   
   
  </ChakraProvider>

  );
}

export default App;
