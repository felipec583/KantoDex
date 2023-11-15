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
  const [filteredData, setFilteredData] = useState([]);
  return (
    <>
      <NavBar />
      <Hero />
      <Buscador
        newList={pokemonData}
        setFilteredData={setFilteredData}
      />
      <MiApi
        newlist={pokemonData}
        setNewList={setPokemonData}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        filteredPkmn={filteredData}
      />
    </>
  );
};

export default App;

