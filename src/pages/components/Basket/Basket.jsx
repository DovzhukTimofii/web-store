import { FaShoppingCart } from 'react-icons/fa';
import { Order } from '../Order/Order';
import PropTypes from 'prop-types';
import {TiDelete} from 'react-icons/ti'
import { useState } from 'react';
import './Basket.scss'

export const Basket = ({orders,onDelete}) => {
    const [cartOpen, setCartOpen] = useState(false);


    const showOrders = (orders) => {
        let summa = 0;
        orders.forEach(el => summa += Number.parseFloat(el.price))
        return(
          <div>
            {orders.map((el) => (
              <Order key={el.id} item={el} onDelete={onDelete}/>
            ))}
             <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
          </div>
         
        )
    }

    const showNothing = () => {
        return (
          <div className='empty'>
            <h2>Твоарів нема</h2>
          </div>
        )
    }

    return (
        <>
            <FaShoppingCart
            onClick={() => setCartOpen(!cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`}
            />
            {cartOpen && (
            <div className='shop-cart'>
                <TiDelete className='close-card' onClick={() => setCartOpen(!cartOpen)}/>
                {orders.length > 0 ? showOrders(orders) : showNothing()}
            </div>
            )}
        </>
        
    )

}

Basket.propTypes = {
    orders: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};