import React from 'react';

const Pokemon = (props) => {

  if (props.pokemon.length === 0) return null;

  const altTag = "Picture of " + props.pokemon[0];

  return(
    <div>
      <h3>{props.pokemon[0]}</h3>
      <p>Pokedex Entry: {props.pokemon[1]}</p>
      <p>Height: {props.pokemon[2]}</p>
      <p>Weight: {props.pokemon[3]}</p>
      <img src={props.pokemon[4]} alt={altTag}/>
    </div>
  );
}

export default Pokemon;
