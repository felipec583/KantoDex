import { useEffect, useState } from "react";
import axios from "axios";
const Card = ({ selectedPokemon, setIsModalOpen }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getPokemon(id) {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (res.status === 200) {
        const pokemonData = res?.data;
        setPokemon(pokemonData);
        setLoading(false);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    getPokemon(selectedPokemon);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick() {
    setIsModalOpen(false);
  }

  function getId() {
    return Math.floor(Math.random() * Date.now());
  }
  return (
    <>
      {loading ? (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <span className="loading loading-spinner loading-lg"></span>
              <div className="modal-action"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h1 className="font-bold first-letter:uppercase">
                {pokemon?.name}
              </h1>
              <img
                src={pokemon?.sprites?.front_default}
                alt="pokemon"
                className="pkm-img"
              />
              <p>Altura: {(pokemon?.height * 10) / 100} m</p>
              <ul className="flex gap-3 align-middle justify-center">
                Tipo :
                {pokemon?.types?.map((type) => {
                  {
                    return (
                      <div
                        className="badge badge-outline outline-cerulean-blue my-1 p-3 "
                        key={getId()}
                      >
                        {type?.type?.name}
                      </div>
                    );
                  }
                })}
              </ul>
              <div className="modal-action">
                <label
                  htmlFor="my_modal_6"
                  className="btn bg-boston-red text-white"
                  onClick={handleClick}
                >
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;

