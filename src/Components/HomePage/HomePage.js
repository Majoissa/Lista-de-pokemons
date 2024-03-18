import React from "react";
import Carousel from "../Carousel/Carousel";
import GridSection from "../Grid/GridSection";

const Homepage = () => {
  return (
    <>
      <Carousel
        images={[
          "https://i.blogs.es/82d7ef/pokemon/1366_521.jpeg",
          "https://media.vandal.net/i/1280x720/10-2023/17/202310171423122_3.jpg",
        ]}
      />
      <GridSection />
    </>
  );
};

export default Homepage;
