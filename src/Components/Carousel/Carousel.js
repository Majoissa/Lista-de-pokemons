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
      paddingBottom={50}
      paddingTop={25}
    >
      <IconButton
        onClick={handleLeftClick}
        icon={<ChevronLeftIcon boxSize={9} />}
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
            mt={{ sm: 5, base: 40, md: 70, lg: 100 }}
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
              color="#0f3f44"
              textShadow="0 0 10px #FFD100"
              fontSize={{ sm: "1xl", base: "2xl", md: "5xl", lg: "5xl" }}
              textAlign="center"
            >
              Welcome to Pokemon World!
            </Heading>
            <Image
              src={image}
              alt={`Imagen del carrousel ${index}`}
              objectFit="cover"
              w="80vw"
              h={{ sm: "50vh", base: "60vh", md: "70vh", lg: "80vh" }}
            />
          </Box>
        ))}
      </Flex>
      <IconButton
        onClick={handleRightClick}
        icon={<ChevronRightIcon boxSize={9} />}
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
