import React from 'react';

const Pokemon = (props) => {

  if (props.pokemon.length === 0) return null;

  const altTag = "Picture of " + props.pokemon[0];
  const height = props.pokemon[1] / 10;
  const weight = props.pokemon[2] / 10;

  const types = props.pokemon[4].map((element, index) => {
    return <li key={index}>{element.type.name}</li>
  });

  const moves = props.pokemon[5].map((element, index) => {
    return <li key={index}>{element.move.name}</li>
  });

  return(
    <div className="pokemon-details">
      <h3>{props.pokemon[0]}</h3>
      <p>Height: {height}m</p>
      <p>Weight: {weight}kg</p>
      <img src={props.pokemon[3]} alt={altTag} className="pokemon-image"/>
      <p>Type:</p>
        <ul>{types}</ul>
      <p>Moves:</p>
        <ul>{moves}</ul>
    </div>
  );
}

export default Pokemon;
