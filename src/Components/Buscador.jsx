import React, { useEffect, useState } from "react";

const Buscador = ({ newList, setFilteredData }) => {
  const [value, setValue] = useState("");
  const copy = [...newList];
  const filteredPokemonList = copy.filter((pkmn) => {
    return value === ""
      ? copy
      : pkmn?.name.includes(value) ||
          pkmn?.types[0].type?.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    setFilteredData(filteredPokemonList);
    console.log(filteredPokemonList);
  }, [value]);
  return (
    <>
      <div className="flex gap-10">
        <input
          type="text"
          id="searchbar"
          placeholder="Escribe nombre de pokémon"
          className="input input-bordered w-full"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Buscador;
