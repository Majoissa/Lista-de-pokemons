import React from "react";
import { Link } from "wouter";
import { Text, useColorMode, VStack, Box } from "@chakra-ui/react";

const GridSection = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack
        bg={colorMode === "light" ? "white" : "gray.750"}
        color={colorMode === "light" ? "gray.800" : "white"}
        w={"100%"}
        minH={"100vh"}
      >
        <Box mt={250}>
          <Text>Holaaaa esto es una prueba</Text>
        </Box>
      </VStack>
    </>
  );
};

export default GridSection;
