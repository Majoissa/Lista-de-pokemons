import "./App.css";
import { Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./Components/HomePage/HomePage";
import PokemonDescription from "./Components/PokemonDescription/PokemonDescription";
import { Box } from "@chakra-ui/react";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <Box className="App">
          <Route path="/" component={Homepage} />
          <Route path="/pokemon/:id" component={PokemonDescription} />
        </Box>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
