import { useEffect, useState } from "react";
import { FaSortUp } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { VscDebugRestart } from "react-icons/vsc";
import Card from "./Card";
import axios from "axios";
const MiApi = ({
  pokemonDataList,
  setPokemonDataList,
  filteredPkmn,
  setFilteredData,
}) => {
  const [loading, setLoading] = useState(true);
  const [isSorted, setIsSorted] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  async function getPokemonList() {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );

      const pokemonList = res.data?.results;
      const TransformedPkmList = pokemonList.map((pkm, index) => {
        return { ...pkm, id: index + 1 };
      });
      return TransformedPkmList;
    } catch (error) {
      console.log(error);
    }
  }

  async function getTransformedList() {
    const TransformedPkmList = await getPokemonList();
    setLoading(false);
    setPokemonDataList(TransformedPkmList);
    setFilteredData(TransformedPkmList);
  }

  function sortNamesAlphabetically() {
    const sorted = filteredPkmn.sort((first, second) => {
      const fName = first?.name;
      const sName = second?.name;

      if (fName.localeCompare(sName) < 0) return -1;
      else if (fName.localeCompare(sName) > 0) return 1;
      else if (fName.localeCompare(sName) == 0) return 0;
    });
    if (!isSorted) {
      setIsSorted(true);
      setFilteredData(sorted);
      return;
    } else {
      setIsSorted(false);
      setFilteredData(sorted.reverse());
    }
  }

  async function resetListOrder() {
    const TransformedPkmList = await getPokemonList();
    setFilteredData(TransformedPkmList);
  }

  function handleClick(id) {
    setSelectedPokemon(id);
    setIsModalOpen(true);
    console.log(isModalOpen);
  }

  /*   async function getData(id) {
    try {
      const data = await getPokemon(id);
      setPokeData(data);
      console.log(pokeData);
    } catch (error) {
      console.log(error);
    }
  } */
  useEffect(() => {
    getTransformedList();
    console.log(isSorted);
  }, [loading]);
  return (
    <>
      {isModalOpen && (
        <Card
          selectedPokemon={selectedPokemon}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {loading && <p>Loading...</p>}
      <div className="overflow-auto my-3 table-cont">
        <table className="table table-zebra  w-full">
          <thead className="backdrop-blur-sm bg-white/40">
            <tr>
              <th>N</th>
              <th>Vista</th>
              <th className="sort-col">
                {!isSorted ? (
                  <FaSortUp
                    size={25}
                    className="arrow"
                    onClick={sortNamesAlphabetically}
                  />
                ) : (
                  <TiArrowSortedDown
                    size={25}
                    className="arrow"
                    onClick={sortNamesAlphabetically}
                  />
                )}
                <VscDebugRestart
                  size={25}
                  className="arrow"
                  onClick={resetListOrder}
                />
                Pokemon
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPkmn.map((pkmn) => {
              return (
                <tr className="hover" key={pkmn?.id}>
                  <th>{pkmn?.id}</th>
                  <td>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn?.id}.png`}
                      alt=""
                    />
                  </td>
                  <td>{pkmn?.name.toUpperCase()}</td>
                  <td>
                    <label
                      className="btn bg-red-world text-white hover:bg-boston-red"
                      htmlFor="my_modal_6"
                      onClick={() => {
                        handleClick(pkmn?.id);
                      }}
                    >
                      Ver datos
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MiApi;

