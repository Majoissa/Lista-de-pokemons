import React from "react";
import Carousel from "../Carousel/Carousel";
import GridSection from "../Grid/GridSection";
import Nav from "../Nav/Nav";

const Homepage = () => {
  const scrollToGridSection = () => {
    const gridSection = document.getElementById("gridSection");
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Nav isHome={true} />
      <Carousel
        images={[
          "https://media.vandal.net/i/1280x720/10-2023/17/202310171423122_3.jpg",
          "https://mitsloanreview.mx/wp-content/uploads/2023/02/lecciones-de-marketing-de-pokemon.jpg",
          "https://www.einerd.com.br/wp-content/uploads/2018/06/pok%C3%A9mon-alimento-capa-e1559149719440.jpg",
        ]}
      />
      <GridSection />
    </>
  );
};

export default Homepage;
