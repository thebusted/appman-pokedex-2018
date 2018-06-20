import React, { Component } from 'react';

import './Modal.scss';

import SearchPokemon from './SearchPokemon';

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="Content">
          <SearchPokemon />
        </div>
      </div>
    );
  }
}
export default Modal;