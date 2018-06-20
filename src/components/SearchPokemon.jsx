import React, { Component } from 'react';

import './SearchPokemon.scss';

class SearchPokemon extends Component {
  render() {
    return (
      <h1 className="SearchPokemon">{this.props.title}</h1>
    );
  }
}
export default SearchPokemon;