const Hero = ({ inputRef }) => {
  return (
    <div
      className="hero min-h-screen my-2 rounded-box"
      style={{
        backgroundImage: "url(../src/assets/hero-img.png)",

        backgroundSize: "repeat",
      }}
    >
      <img src={``} alt="" />
      <div className="hero-overlay bg-opacity-60 rounded-box"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bienvenido</h1>
          <p className="mb-5">
            Busca cualquier pokémon de la primera generación
          </p>
          <button
            className="btn btn-primary"
            onClick={() => inputRef.current.focus()}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

