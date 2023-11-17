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
        <div className="join">
          <a
            className="btn join-item  bg-cerulean-blue border-none  text-white  hover:bg-amber-400"
            href={"#tablon"}
          >
            Lista
          </a>
          <a
            className="btn join-item  bg-cerulean-blue border-none  text-white  hover:bg-amber-400"
            href={"#footer-comp"}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <MdCatchingPokemon size={50} />
      </div>
    </div>
  );
};

export default NavBar;

