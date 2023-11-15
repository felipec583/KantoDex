import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="navbar  bg-boston-red text-primary-content rounded">
      <div className="navbar-start">
        <h2 className="rounded-full p-2 text-xl bg-golden-yellow text-black font-bold">
          Kanto Pokedex
        </h2>
      </div>
      <div className="navbar-center gap-2">
        <a className="btn bg-cerulean-blue border-none text-white hover:bg-amber-400">
          Home
        </a>
        <a className="btn  bg-cerulean-blue border-none  text-white  hover:bg-amber-400">
          Buscar pokémon
        </a>
        <a className="btn   bg-cerulean-blue border-none  text-white  hover:bg-amber-400">
          Lista de pkmn
        </a>
      </div>
      <div className="navbar-end">
        <MdCatchingPokemon size={50} />
      </div>
    </div>
  );
};

export default NavBar;
