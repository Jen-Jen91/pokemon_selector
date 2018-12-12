import React from 'react';

const PokemonSelector = (props) => {

  const originalPokemon = props.pokemon.slice(0, 151);

  const pokemonData = originalPokemon.map((pokemon, index) => {
    return <option value={index} key={index}>
      {pokemon.name}
    </option>
  });

  function handleChange(event) {
    props.onPokemonSelected(event.target.value);
  }

  return(
    <select name="pokemon-selector" id="pokemon-selector" onChange={handleChange}>
      <option disabled defaultValue>Choose a Pokemon...</option>
      {pokemonData}
    </select>
  );
}

export default PokemonSelector;
