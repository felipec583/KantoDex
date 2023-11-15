import React, { useEffect, useState } from "react";

const Buscador = () => {
  const [value, setValue] = useState("");
/*   useEffect(() => {
    console.log(value);
  }, [value]) */
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
