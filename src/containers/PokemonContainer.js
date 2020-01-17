import React, {Component} from 'react';
import Title from '../components/Title.js';
import PokemonSelector from '../components/PokemonSelector.js';
import Pokemon from '../components/Pokemon.js';

class PokemonContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currentPokemon: []
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount() {
    this.loadAllPokemon('https://pokeapi.co/api/v2/pokemon/?limit=151');
  }

  loadAllPokemon(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({pokemon: data.results});
      }
    }
    request.send();
  }

  handlePokemonSelected(index) {
    let pokedex = parseInt(index) + 1;
    this.loadOnePokemon('https://pokeapi.co/api/v2/pokemon/' + pokedex + '/');
  }

  loadOnePokemon(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        const info = [data.name, data.height, data.weight, data.sprites.front_default, data.types, data.moves]
        this.setState({currentPokemon: info});
      }
    }
    request.send();
  }

  render() {
    return(
      <div className="mainContainer">
        <Title />
        <PokemonSelector pokemon={this.state.pokemon} onPokemonSelected={this.handlePokemonSelected}/>
        <Pokemon pokemon={this.state.currentPokemon}/>
      </div>
    );
  }

}

export default PokemonContainer;
