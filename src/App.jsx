import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import MiApi from "./Components/MiApi";
import Buscador from "./Components/Buscador";
const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  console.log(pokemonList);
  console.log(pokemonData);
  return (
    <>
      <NavBar />
      <Hero />
      <Buscador />
      <MiApi
        newlist={pokemonData}
        setNewList={setPokemonData}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
    </>
  );
};

export default App;

