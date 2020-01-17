import React from 'react';

const Title = () => {
  return(
    <section className="titleContainer">
      <img className="logo" src={require("../images/PokemonLogo.png")} alt="Pokemon Logo"/>
      <h1 className="title">All 151 original Pokemon!</h1>
    </section>
  );
}

export default Title;
