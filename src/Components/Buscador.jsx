import { useEffect, useState } from "react";
const Buscador = ({ pokemonDataList, setFilteredData, inputRef }) => {
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
          className="input input-bordered w-full"
          onChange={handleInputChange}
          value={value}
          onKeyDown={(e) => {
            e.key.charCodeAt(0) !== " ";
          }}
          ref={inputRef}
        />
      </div>
    </>
  );
};
export default Buscador;

