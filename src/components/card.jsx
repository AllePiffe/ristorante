
//importazione classica di una classe component
import React, { Component } from 'react';
// component Card 
class Card extends Component {
    render() {
        return (
            <div className='col d-flex justify-content-around'>
                <div className='card mb-3 mt-3' style={{ width: '18rem', textAlign: 'center' }}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className='btn btn-primary'>ADD <span className='badge badge-light'>{this.props.card.quantity}</span></button>
                    <img src={this.props.card.image} className='card-img-top' alt='' />
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.card.name} Roll</h5>
                        <p className='card-text'>€{this.props.card.price}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className='btn btn-outline-danger'>DELETE</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;