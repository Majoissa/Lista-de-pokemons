# Pokemons list

La librería utilizada para este proyecto de react es "Chakra UI"

## Implementaciones

- Navegación, presente en el archivo App.js realizada con 'wouter'
- Incorporación de la librería Chakra Ui con ChakraProvider tambien en el App.js
- Componente Nav en el archivo Nav.js que contiene un botón para ir al grid de los pokemones, y un botón para cambiar vistas 'light/dark'
- Un carousel con una bienvenida a la página y un carousel de imagenes harcodeadas.
- Sección Grid: tiene un título y un switch que permite intercambiar entre dos vistas: vista lista y lista grid. Además cuenta con paginación, y por página caben 20 pokemons. Los datos se obtienen de la Api pokemonapi
- Todo lo descripto anteriormente forma parte del Home
- Al presionar el botón 'see more... ' de las tarjetas, se navega a la página PokemonDescription, donde se pueden ver más imágenes del pokemon seleccionado, y la ruta es /pokemon/id de dicho pokemon. Esta navegación está implementada con los params de 'useRoute' de wouter.

## Pasos para ejecutar el proyecto:
1) Clonar el repositorio en el ordenador
2) En la terminal, navegar hacia la ruta del proyecto, y dentro del repositorio 'Lista-de-pokemones' ejecutar el comando 'npm install' para instalar las dependencias implementadas
3) Una vez realizado el paso anterior, ejecutar 'npm start'
