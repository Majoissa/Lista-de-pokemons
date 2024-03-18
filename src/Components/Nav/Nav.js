import React from "react";
import { Button, Stack, Box, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useLocation } from "wouter";

const Nav = ({ isHome }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [location, setLocation] = useLocation();

  const scrollToGridSection = () => {
    if (isHome) {
      const gridSection = document.getElementById("gridSection");
      if (gridSection) {
        gridSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation("/");
    }
  };
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
        <Button colorScheme="orange" onClick={scrollToGridSection}>
          See all our Pokemons
        </Button>
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
