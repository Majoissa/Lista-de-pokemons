import React, { useRef } from "react";
import {
  Flex,
  Box,
  IconButton,
  Image,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carrousel = ({ images }) => {
  const scrollContainerRef = useRef();
  const { colorMode } = useColorMode();

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      bg={colorMode === "light" ? "white" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "white"}
      align="center"
      justify="center"
      position="relative"
      w="full"
      h="auto"
      overflow="hidden"
      paddingBottom={{ base: 1, sm: 5, md: 10, lg: 50 }}
      paddingTop={25}
    >
      <IconButton
        onClick={handleLeftClick}
        icon={<ChevronLeftIcon boxSize={12} />}
        position="absolute"
        left={0}
        zIndex={2}
        variant="ghost"
        size="lg"
      />
      <Flex
        ref={scrollContainerRef}
        overflowX="scroll"
        scrollSnapType="x mandatory"
        w="full"
        css={{
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        flexWrap="nowrap"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            flex="0 0 100vw"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            scrollSnapAlign="center"
            w="80vw"
            h="80vh"
            mt={{ base: 2, sm: 10, md: 70, lg: 100 }}
          >
            <Heading
              marginTop={{
                sm: "-250px",
                base: "-300px",
                md: "-350px",
                lg: "-400px",
              }}
              as={"h1"}
              position={"absolute"}
              w={"70%"}
              fontFamily="'Mochiy Pop P One', sans-serif"
              color={colorMode === "light" ? "#FFD100" : "#0f3f44"}
              textShadow={
                colorMode === "light" ? "0 0 10px #0f3f44" : "0 0 10px #FFD100"
              }
              fontSize={{ base: "1xl", sm: "2xl", md: "5xl", lg: "5xl" }}
              textAlign="center"
            >
              Welcome to Pokemon's World!
            </Heading>
            <Image
              src={image}
              alt={`Imagen del carrousel ${index}`}
              objectFit="cover"
              w="80vw"
              h={{ base: "50vh", sm: "60vh", md: "70vh", lg: "80vh" }}
              boxShadow="dark-lg"
              rounded="md"
            />
          </Box>
        ))}
      </Flex>
      <IconButton
        onClick={handleRightClick}
        icon={<ChevronRightIcon boxSize={12} />}
        position="absolute"
        right={0}
        zIndex={2}
        variant="ghost"
        size="lg"
      />
    </Flex>
  );
};

export default Carrousel;
