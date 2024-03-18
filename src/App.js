import "./App.css";
import { Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/HomePage/HomePage";
import PokemonDescription from "./Components/PokemonDescription/PokemonDescription";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <Box as="header" className="App-header">
          <Nav />
          <Route path="/" component={Homepage} />
        </Box>
        <Route path="/pokemon/:id" component={PokemonDescription} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
