import { useEffect, useState } from "react";
import axios from "axios";
const Card = ({ selectedPokemon, isModalOpen, setIsModalOpen }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(null);
  async function getPokemon(id) {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (res.status !== 404) {
        const pokemonData = res?.data;
        setPokemon(pokemonData);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    if (isModalOpen) getPokemon(selectedPokemon);
  }, [isModalOpen]);

  function handleClick() {
    setIsModalOpen(false);
  }

  function getId() {
    return Math.random() * Date.now();
  }
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold first-letter:uppercase">{pokemon?.name}</h1>
          <img
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
            className="pkm-img"
          />
          <p>Altura: {pokemon?.height}</p>
          <p>
            {
              pokemon?.types?.map((type) => {
                {
                  return <span key={getId()}>{type?.name}</span>;
                }
              })}
          </p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={handleClick}>
              Cerrar
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

