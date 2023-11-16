import React, { useEffect, useState } from "react";
import Card from "./Card";
const Buscador = ({ pokemonDataList, setFilteredData }) => {
  const [value, setValue] = useState("");

  function handleInputChange(e) {
    const inputSearchValue = e.target.value;
    const whitespaceRegex = /\s/;
    if (!whitespaceRegex.test(inputSearchValue)) {
      setValue(inputSearchValue);
    }
  }

  const copy = [...pokemonDataList];
  const filteredPokemonList = copy.filter((pkmn) => {
    return value === "" ? copy : pkmn?.name.includes(value.toLowerCase());
  });
  useEffect(() => {
    setFilteredData(filteredPokemonList);
    console.log(filteredPokemonList[0]);
  }, [value]);
  return (
    <>
      <div
        className="flex
      join"
      >
        <input
          type="text"
          id="searchbar"
          placeholder="Escribe nombre de pokémon"
          className="input input-bordered w-full join-item"
          onChange={handleInputChange}
          value={value}
          onKeyDown={(e) => {
            e.key.charCodeAt(0) !== " ";
          }}
        />
        <label htmlFor="my_modal_6" className="btn rounded join-item">
          Ver datos
        </label>
        <Card />
      </div>
    </>
  );
};
export default Buscador;
