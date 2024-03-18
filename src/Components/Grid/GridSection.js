import React from "react";
import { Link } from "wouter";
import { Text, useColorMode, VStack, Heading } from "@chakra-ui/react";

const GridSection = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack
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
          color="#0f3f44"
          textShadow="0 0 10px #FFD100"
          fontSize={{ base: "2xl", md: "5xl", lg: "5xl" }}
          textAlign="center"
        >
          Know more about our Pokemons!
        </Heading>
      </VStack>
    </>
  );
};

export default GridSection;
