import React from 'react';
import Select from "react-select";

const PokemonSelector = (props) => {

  const originalPokemon = props.pokemon.slice(0, 151);

  const pokemonData = originalPokemon.map((pokemon, index) => {
    return {value: index, label: pokemon.name}
  });

  function handleChange(event) {
    props.onPokemonSelected(event.value);
    
  }

  return(
    <section className="pokemonSelector">
      <Select 
        options={pokemonData}
        placeholder="Choose a Pokemon..."
        isSearchable="false"
        onChange={handleChange}
        styles={selectorStyles}
      />
    </section>
  );
}

export default PokemonSelector;

const selectorStyles = {
  control: (state) => ({
    ...state,
    backgroundColor: "rgb(255,203,5)",
    border: "5px solid rgb(44,114,184)",
    width: "400px",
    cursor: "pointer"
  }),
  placeholder: (state) => ({
    ...state,
    color: "black",
    fontWeight: "300"
  }),
  option: (state) => ({
    ...state,
    textTransform: "capitalize",
    cursor: "pointer"
  }),
  singleValue: (state) => ({
    ...state,
    textTransform: "capitalize"
  }),
  dropdownIndicator: (state) => ({
    ...state,
    color: "black"
  })
}
