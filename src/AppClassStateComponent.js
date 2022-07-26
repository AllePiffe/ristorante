import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
//import CardFunctionComponent from './components/cardfunctioncomponent';
//import CardClassComponent from './components/cardclasscomponent';
//import CardClassComponent from './components/cardclasscomponent';


import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class AppClassStateComponent extends Component {
  state = {
    object_cards: [
      { id: 0, name: "California", price: 1.99, image: california },
      { id: 1, name: "Dragon", price: 1.99, image: dragon },
      { id: 2, name: "Dynamite", price: 1.99, image: dynamite },
      { id: 3, name: "Philadelphia", price: 1.99, image: philadelphia },
      { id: 4, name: "Rainbow", price: 1.99, image: rainbow },
      { id: 5, name: "Shrimp", price: 1.99, image: shrimp }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <h1>Cosa vuoi ordinare?</h1>
          <hr />
          <div className='row'>
            {this.state.object_cards.map(object_cards => (
              <Card
                key={object_cards.id}
                card={object_cards}
              //passo l'intero oggetto cards
              //name={cards.name}
              //price={cards.price}
              //image={cards.image}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppClassStateComponent;