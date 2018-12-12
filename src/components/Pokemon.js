import React from 'react';

const Pokemon = (props) => {
  if (!props.pokemon) return null;

  return(
    <h3>{props.pokemon.name}</h3>
  );
}

export default Pokemon;
