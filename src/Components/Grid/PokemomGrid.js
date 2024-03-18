import CardPokemon from "./CardPokemon";
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";

const PokemonGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const listResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=40"
        );
        if (!listResponse.ok) {
          throw new Error(`HTTP error! status: ${listResponse.status}`);
        }
        const listData = await listResponse.json();

        const pokemonsData = await Promise.all(
          listData.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonDetails = await pokemonResponse.json();

            const speciesResponse = await fetch(pokemonDetails.species.url);
            const speciesDetails = await speciesResponse.json();

            return {
              ...pokemonDetails,
              description: speciesDetails.flavor_text_entries.find(
                (entry) => entry.language.name === "en"
              )?.flavor_text,
            };
          })
        );

        setPokemonData(pokemonsData);
      } catch (error) {
        console.error("It was not possible to obtain pokemon", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <Grid
      templateColumns={{
        base: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      gap={6}
      px={20}
      py={8}
      mt={20}
      zIndex={5}
    >
      {pokemonData.map((pokemon) => (
        <Box key={pokemon.id} w={"100%"}>
          <CardPokemon pokemon={pokemon} />
        </Box>
      ))}
    </Grid>
  );
};

export default PokemonGrid;
