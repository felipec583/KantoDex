import { useState, useRef } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import MiApi from "./Components/MiApi";
import Buscador from "./Components/Buscador";
import Footer from "./Components/Footer";
const App = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const inputRef = useRef(null);
  return (
    <>
      <NavBar />
      <Hero inputRef={inputRef} />
      <Buscador
        pokemonDataList={pokemonDataList}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        inputRef={inputRef}
      />
      <MiApi
        setPokemonDataList={setPokemonDataList}
        filteredPkmn={filteredData}
        setFilteredData={setFilteredData}
      />
      <Footer />
    </>
  );
};

export default App;

