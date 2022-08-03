//importazione classica di una classe component
import React, { Component } from 'react';
// component Card 



class CardClassComponent extends Component {
    render() {
        return (
            <div className='col'>
                <div className='card' style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={this.props.image} className='card-img-top' alt='' />
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.name}</h5>
                        <p className='card-text'>€{this.props.price}</p>
                        <button className='btn btn-outline-danger'>Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardClassComponent;
