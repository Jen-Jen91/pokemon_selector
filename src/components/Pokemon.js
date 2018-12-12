import React from 'react';

const Pokemon = (props) => {

  if (props.pokemon.length === 0) return null;

  const altTag = "Picture of " + props.pokemon[0];

  const height = props.pokemon[2] / 10;
  const weight = props.pokemon[3] / 10;

  return(
    <div className="pokemon-details">
      <h3>{props.pokemon[0]}</h3>
      <p>Pokedex Entry: {props.pokemon[1]}</p>
      <p>Height: {height}m</p>
      <p>Weight: {weight}kg</p>
      <img src={props.pokemon[4]} alt={altTag}/>
    </div>
  );
}

export default Pokemon;
