import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

//import CardFunctionComponent from './components/cardfunctioncomponent';
//import CardClassComponent from './components/cardclasscomponent';

import california from './image/california.jpg';
import dragon from './image/dragon.jpg';
import dynamite from './image/dynamite.jpg';
import philadelphia from './image/philadelphia.jpg';
import rainbow from './image/rainbow.jpg';
import shrimp from './image/shrimp.jpg';

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