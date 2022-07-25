import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

function AppFunctionComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container'>
        <h1>Cosa vuoi ordinare?</h1>
        <hr />
        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </React.Fragment>


  );
}

export default AppFunctionComponent;