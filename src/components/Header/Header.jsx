import { useState } from 'react';
import './Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Order } from '../Order/Order';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import PropTypes from 'prop-types';
import {TiDelete} from 'react-icons/ti'


export const Header = ({ orders, onDelete, inputHandler }) => {
  
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
    <header className='header'>
      <div>
        <span className='logo'>Hous Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <SearchPanel inputHandler={inputHandler}/>
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
      </div>
      <div className='presentation'></div>
    </header>
  );
};

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
};