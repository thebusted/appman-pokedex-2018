import React, { Component } from 'react';
import smile from '../cute.png';
import './MyDex.scss';

class MyDex extends Component {
  render() {
    let percent70 = {
      width: '70%'
    };
    let percent100 = {
      width: '100%'
    };
    return (
      <div className="MyDex">
        <div className="Dexs">
          <div className="Dex">
            <div className="Card">
              <figure className="img">
                <img src="https://images.pokemontcg.io/ex8/98.png" alt="" />
              </figure>
              <div className="detail">
                <h3>Deoxys ex</h3>
                <div className="status">
                  <dl>
                    <dt>HP</dt>
                    <dd><span style={percent70}></span></dd>
                    <dt>STR</dt>
                    <dd><span style={percent100}></span></dd>
                    <dt>WEAK</dt>
                    <dd><span style={percent100}></span></dd>
                  </dl>
                </div>
                <div className="smiles">
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Dex">
            <div className="Card">
              <figure className="img">
                <img src="https://images.pokemontcg.io/dp6/90.png" alt="" />
              </figure>
              <div className="detail">
                <h3>Cubone</h3>
                <div className="status">
                  <dl>
                    <dt>HP</dt>
                    <dd><span style={percent70}></span></dd>
                    <dt>STR</dt>
                    <dd><span style={percent100}></span></dd>
                    <dt>WEAK</dt>
                    <dd><span style={percent100}></span></dd>
                  </dl>
                </div>
                <div className="smiles">
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                  <img src={smile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyDex;