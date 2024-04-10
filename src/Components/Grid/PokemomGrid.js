import CardPokemon from "./CardPokemon";
import React, { useState, useEffect } from "react";
import { Box, Grid, VStack } from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useAppContext } from "../../AppContext";

const PokemonGrid = () => {
  const { isListView, currentPage, setCurrentPage } = useAppContext();
  const [pokemonData, setPokemonData] = useState([]);
  const [totalPokems, setTotalPokemons] = useState(0);

  useEffect(() => {
    const fetchPokemons = async (page) => {
      //se calcula el offset basado en la pagina actual y el limite por pagina
      const limit = 20;
      const offset = (page - 1) * limit;

      try {
        const listResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );

        if (!listResponse.ok) {
          throw new Error(`HTTP error! status: ${listResponse.status}`);
        }
        const listData = await listResponse.json();
        setTotalPokemons(listData.count);

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

    fetchPokemons(currentPage);
  }, [currentPage]);

  return (
    <Box>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalPokems / 20)}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isListView ? (
        <VStack spacing={4} mt={15}>
          {pokemonData.map((pokemon) => (
            <CardPokemon
              key={pokemon.id}
              pokemon={pokemon}
              isListView={isListView}
            />
          ))}
        </VStack>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={6}
          px={20}
          py={8}
          mt={15}
          zIndex={5}
        >
          {pokemonData.map((pokemon) => (
            <Box key={pokemon.id} w={"100%"}>
              <CardPokemon pokemon={pokemon} isListView={isListView} />
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PokemonGrid;
