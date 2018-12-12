import React, {Component} from 'react';
import Title from '../components/Title.js';
import PokemonList from '../components/PokemonList.js';

class PokemonContainer extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div>
        <Title />
        <PokemonList />
      </div>
    );
  }

}

export default PokemonContainer;
