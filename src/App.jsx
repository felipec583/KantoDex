import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import MiApi from "./Components/MiApi";
import Buscador from "./Components/Buscador";
import Footer from "./Components/Footer";
const App = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  return (
    <>
      <NavBar />
      <Hero />
      <Buscador
        pokemonDataList={pokemonDataList}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <MiApi
        pokemonDataList={pokemonDataList}
        setPokemonDataList={setPokemonDataList}
        filteredPkmn={filteredData}
        setFilteredData={setFilteredData}
      />
      <Footer />
    </>
  );
};

export default App;
