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

const CardPokemon = ({ pokemon, isListView }) => {
  const { colorMode } = useColorMode();

  if (isListView) {
    return (
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mx={25}
        px={5}
        maxW={"700px"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <Stack>
          <CardBody>
            <Heading size="md" textTransform={"capitalize"}>
              {pokemon.name}
            </Heading>

            <Text py="2">{pokemon.description}</Text>
          </CardBody>

          <CardFooter>
            <Link to={`/pokemon/${pokemon.id}`}>
              <Button variant="solid" colorScheme="blue">
                See more...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    );
  } else {
    return (
      <Box>
        <Card maxW="sm" key={pokemon.id}>
          <CardBody>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
  }
};

export default CardPokemon;
