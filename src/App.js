import { ChakraProvider } from '@chakra-ui/react'
import Hero from "./Components/Hero";
import MovieContainer from "./Components/MovieContainer";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    <Hero/>
   <MovieContainer/>
   
  </ChakraProvider>

  );
}

export default App;
