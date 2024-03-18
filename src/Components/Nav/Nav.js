import React from "react";
import { Button, Stack, Box, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="nav"
      className="navBar"
      bg={colorMode === "light" ? "#FFD100" : "#3A946E"}
      padding={"1rem"}
      position={"fixed"}
      width={"100%"}
      height={"70px"}
      top={0}
      zIndex={11}
    >
      <Stack
        direction={"row"}
        spacing={4}
        align={"flex-end"}
        justify={"flex-end"}
        paddingRight={"1rem"}
      >
        <Button colorScheme="orange">See all our Pokemons</Button>
        <Button onClick={toggleColorMode} borderRadius={100}>
          {colorMode === "light" ? (
            <MoonIcon boxSize={5} />
          ) : (
            <SunIcon boxSize={5} />
          )}
        </Button>
      </Stack>
    </Box>
  );
};

export default Nav;
