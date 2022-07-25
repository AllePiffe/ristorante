
// component Card 
import california from '../images/california.png';


function CardFunctionComponent() {
    return (
        <div className='col'>
            <div className='card' style={{ width: '18rem', textAling: "center" }}>
                <img src={california} className='card-img-top' alt='' />
                <div className='card-body'>
                    <h5 className='card-title'>California</h5>
                    <p className='card-text'>€ 1.99</p>
                    <button className='btn btn-outline-danger'>Elimina</button>
                </div>
            </div>
        </div>
    )
}

export default CardFunctionComponent;
