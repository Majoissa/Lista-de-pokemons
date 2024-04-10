import React from "react";
import { useColorMode, VStack, HStack, Heading, Box } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import PokemonGrid from "./PokemomGrid";
import { useAppContext } from "../../AppContext";

const GridSection = () => {
  const { colorMode } = useColorMode();
  const { isListView, setIsListView } = useAppContext();
  return (
    <>
      <VStack
        id="gridSection"
        bg={colorMode === "light" ? "#dd6b20" : "#3373af"}
        color={colorMode === "light" ? "gray.800" : "white"}
        w={"100%"}
        minH={"100vh"}
        justifyContent="center"
        align="center"
        mt={-250}
      >
        <Heading
          as="h1"
          w={"50%"}
          fontFamily="'Mochiy Pop P One', sans-serif"
          color={colorMode === "light" ? "#FFD100" : "#0f3f44"}
          textShadow={
            colorMode === "light" ? "0 0 10px #0f3f44" : "0 0 10px #FFD100"
          }
          fontSize={{ base: "2xl", md: "5xl", lg: "5xl" }}
          textAlign="center"
          zIndex={7}
          mt={{ base: "340", lg: "320" }}
        >
          Know more about our Pokemons!
        </Heading>
        <HStack w={"full"} justify={"space-between"}>
          <Box></Box>
          <HStack mt={-170} mr={50}>
            <Switch
              isChecked={isListView}
              onChange={() => setIsListView(!isListView)}
              size={"lg"}
              colorScheme="blue"
            />
          </HStack>
        </HStack>
        <PokemonGrid isListView={isListView} />
      </VStack>
    </>
  );
};

export default GridSection;
