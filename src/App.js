import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

//import CardFunctionComponent from './components/cardfunctioncomponent';
//import CardClassComponent from './components/cardclasscomponent';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <h1>Cosa vuoi ordinare?</h1>
          <hr />
          <div className='row'>
            <Card image={california} name={"California"} price={1.99} />
            <Card image={dragon} name={"Dragon"} price={1.99} />
            <Card image={dynamite} name={"Dynamite"} price={1.99} />
            <Card image={philadelphia} name={"Philadelphia"} price={1.99} />
            <Card image={rainbow} name={"Rainbo"} price={1.99} />
            <Card image={shrimp} name={"Shrimp"} price={1.99} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;