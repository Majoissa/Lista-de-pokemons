import "./App.css";
import { Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./Components/HomePage/HomePage";
import PokemonDescription from "./Components/PokemonDescription/PokemonDescription";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <Route path="/" component={Homepage} />
        <Route path="/pokemon/:id" component={PokemonDescription} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
