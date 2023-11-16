import React, { useEffect, useState } from "react";

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
      <div className="flex gap-6">
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
        />
        <label htmlFor="my_modal_6" className="btn">
          Ver datos
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buscador;
