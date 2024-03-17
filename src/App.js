import "./App.css";
import { Route } from "wouter";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/HomePage/HomePage";
import PokemonDescription from "./Components/PokemonDescription/PokemonDescription";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Route path="/" component={Homepage} />
      </header>
      <Route path="/pokemon/:id" component={PokemonDescription} />
    </div>
  );
}

export default App;
