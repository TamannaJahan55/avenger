import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({selectedActors, remaining, totalCost}) => {
    
    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h5>Remaining: {remaining}</h5>
            <h5>Total Cost: {totalCost}</h5>
            {
                selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
    remaining: PropTypes.number,
    totalCost: PropTypes.number
}

export default Cart;