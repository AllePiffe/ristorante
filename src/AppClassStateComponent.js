import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

//import CardFunctionComponent from './components/cardfunctioncomponent';
//import CardClassComponent from './components/cardclasscomponent';
//import CardClassComponent from './components/cardclasscomponent';

import california from './images/california.jpg';
import dragon from './images/dragon.jpg';
import dynamite from './images/dynamite.jpg';
import philadelphia from './images/philadelphia.jpg';
import rainbow from './images/rainbow.jpg';
import shrimp from './images/shrimp.jpg';

class AppClassStateComponent extends Component {
  state = {
    object_cards: [
      { id: 0, name: "California", price: 1.99, image: california, quantity: 0 },
      { id: 1, name: "Dragon", price: 1.99, image: dragon, quantity: 0 },
      { id: 2, name: "Dynamite", price: 1.99, image: dynamite, quantity: 0 },
      { id: 3, name: "Philadelphia", price: 1.99, image: philadelphia, quantity: 0 },
      { id: 4, name: "Rainbow", price: 1.99, image: rainbow, quantity: 0 },
      { id: 5, name: "Shrimp", price: 1.99, image: shrimp, quantity: 0 },
      { id: 6, name: "Philadelphia", price: 1.99, image: philadelphia, quantity: 0 },
      { id: 7, name: "Rainbow", price: 1.99, image: rainbow, quantity: 0 }
    ]
  }

  headleDelete = cardId => {
    const object_cards = this.state.object_cards.filter(card => card.id !== cardId);
    this.setState({ object_cards });
  }

  headleIncrement = card => {
    const object_cards = [...this.state.object_cards];
    const id = object_cards.indexOf(card);
    object_cards[id] = { ...card };
    object_cards[id].quantity++;
    this.setState({ object_cards });
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
                onDelete={this.headleDelete}
                onIncrement={this.headleIncrement}
                card={object_cards} //passo l'intero oggetto cards
              //name={object_cards.name}
              //price={object_cards.price}
              //image={object_cards.image}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppClassStateComponent;