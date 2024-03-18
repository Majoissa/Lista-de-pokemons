import { useColorMode } from "@chakra-ui/react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Link } from "wouter";

const CardPokemon = ({ pokemon }) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Card maxW="sm" key={pokemon.id}>
        <CardBody>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={180}
              borderRadius="full"
              bg={colorMode === "light" ? "#FFD100" : "gray.800"}
              boxShadow="dark-lg"
            />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading
              fontSize={{ base: "1xl", md: "1xl", lg: "2xl" }}
              textTransform={"capitalize"}
            >
              {pokemon.name}
            </Heading>
            <Text fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}>
              {pokemon.description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter
          display={"grid"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to={`/pokemon/${pokemon.id}`}>
            <Button variant="solid" colorScheme="blue">
              See more...
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default CardPokemon;
