import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import {
  VStack,
  Box,
  Text,
  Heading,
  Grid,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import Nav from "../Nav/Nav";

const PokemonDescription = () => {
  const [match, params] = useRoute("/pokemon/:id");
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (params.id) {
        try {
          // Fetch the Pokémon data
          const pokemonRes = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${params.id}`
          );
          if (!pokemonRes.ok) {
            throw new Error(`HTTP error! status: ${pokemonRes.status}`);
          }
          const pokemonData = await pokemonRes.json();
          setPokemon(pokemonData);

          // Fetch the species data for description
          const speciesRes = await fetch(pokemonData.species.url);
          if (!speciesRes.ok) {
            throw new Error(`HTTP error! status: ${speciesRes.status}`);
          }
          const speciesData = await speciesRes.json();
          setSpecies(speciesData);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };
    fetchPokemonData();
  }, [params.id]);

  // Find the English description
  const description = species?.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/[\n\f]/g, " ");

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Nav isHome={false} />
      {pokemon && species ? (
        <VStack
          spacing={4}
          position={"absolute"}
          top={70}
          bg={colorMode === "light" ? "white" : "gray.800"}
          color={colorMode === "light" ? "gray.800" : "white"}
          w="full"
          h="full"
        >
          <Heading
            fontFamily="'Mochiy Pop P One', sans-serif"
            color={colorMode === "light" ? "#FFD100" : "#0f3f44"}
            textShadow={
              colorMode === "light" ? "0 0 10px #0f3f44" : "0 0 10px #FFD100"
            }
            fontSize={{ base: "2xl", md: "5xl", lg: "5xl" }}
            textAlign="center"
            textTransform={"capitalize"}
            paddingTop={50}
          >
            {pokemon.name}
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            textAlign="center"
            maxW={"70%"}
            py={50}
          >
            {description}
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
            gap={6}
          >
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={180}
              borderRadius="full"
              bg={colorMode === "light" ? "#FFD100" : "gray.800"}
              boxShadow="dark-lg"
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={180}
              borderRadius="full"
              bg={colorMode === "light" ? "#FFD100" : "gray.800"}
              boxShadow="dark-lg"
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={180}
              borderRadius="full"
              bg={colorMode === "light" ? "#FFD100" : "gray.800"}
              boxShadow="dark-lg"
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={180}
              borderRadius="full"
              bg={colorMode === "light" ? "#FFD100" : "gray.800"}
              boxShadow="dark-lg"
            />
          </Grid>
        </VStack>
      ) : (
        <Text>Loading pokemon...</Text>
      )}
    </Box>
  );
};
export default PokemonDescription;
