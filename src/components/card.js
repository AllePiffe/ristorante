
//importazione classica di una classe component
import React, { Component } from 'react';
// component Card 
class Card extends Component {
    render() {
        return (
            <div className='col d-flex justify-content-around'>
                <div className='card mb-3 mt-3' style={{ width: '18rem', textAlign: 'center' }}>
                    <img src={this.props.card.image} className='card-img-top' alt='' />
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.card.name}</h5>
                        <p className='card-text'>€{this.props.card.price}</p>
                        <button className='btn btn-outline-danger'>Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
