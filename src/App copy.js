import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import CardFunctionComponent from './components/cardfunctioncomponent';

class AppClassComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <h1>Cosa vuoi ordinare?</h1>
          <hr />
          <div className='row'>
            <CardFunctionComponent />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Card />
          <Card /> */}
          </div>
        </div>
      </React.Fragment>

    );
  }
}
export default AppClassComponent;