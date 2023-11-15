import { useEffect, useState } from "react";
import axios from "axios";
const MiApi = ({ newlist, setNewList, pokemonList, setPokemonList }) => {
  const [loading, setLoading] = useState(true);

  async function getPokemonList() {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      setPokemonList(res.data.results);
      setLoading(false);
      console.log(pokemonList);
      pokemonList.forEach((pokemon) => {
        getPokemonData(pokemon, request);
      });
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPokemonData(pokemon) {
    try {
      let pokemonUrl = pokemon.url;
      const res = await axios.get(pokemonUrl);
      setNewList((prevList) => [...prevList, res.data]);
    } catch (error) {
      console.log(error);
    }
  }
  const request = [];

  useEffect(() => {
    getPokemonList();
  }, [loading]);
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="overflow-auto h-60 my-3">
        <table className="table table-pin-cols w-full">
          {/* head */}
          <thead>
            <tr>
              <th>N</th>
              <th>Vista</th>
              <th>Pokemon</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}

            {newlist &&
              newlist.map((pkmn) => {
                return (
                  <tr className="hover" key={pkmn?.id}>
                    <th>{pkmn?.id}</th>
                    <td>
                      <img src={pkmn?.sprites["front_default"]} alt="" />
                    </td>
                    <td>{pkmn?.name.toUpperCase()}</td>
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
