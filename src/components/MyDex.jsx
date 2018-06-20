import React, { Component } from 'react';

import './MyDex.scss';

class MyDex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyDex">
        <div className="Dexs">
          <div className="Dex">
            <div className="Card">
              <img src="https://images.pokemontcg.io/ex8/98.png" alt=""/>
            </div>
          </div>
          <div className="Dex">
          <div className="Card">B</div>
          </div>
          <div className="Dex">
            <div className="Card">A</div>
          </div>
          <div className="Dex">
          <div className="Card">B</div>
          </div>
          <div className="Dex">
            <div className="Card">A</div>
          </div>
          <div className="Dex">
          <div className="Card">B</div>
          </div>
          <div className="Dex">
            <div className="Card">A</div>
          </div>
          <div className="Dex">
          <div className="Card">B</div>
          </div>
          <div className="Dex">
            <div className="Card">A</div>
          </div>
          <div className="Dex">
          <div className="Card">B</div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyDex;