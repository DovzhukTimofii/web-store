import { FaShoppingCart } from 'react-icons/fa';
import { Order } from '../Order/Order';
import PropTypes from 'prop-types';
import {TiDelete} from 'react-icons/ti'
import { useState } from 'react';
import React from 'react';
import './Basket.scss'
import { dataType } from '../../../dataTypes';


interface BasketItemType extends dataType {
  onDelete: (item: number) => void;
}

interface TypeOfArgumentBasket extends BasketItemType{
  orders?: BasketItemType[];
  el?: dataType[] | dataType;
}


export const Basket: React.FC<TypeOfArgumentBasket> = ({orders,onDelete}) => {
    const [cartOpen, setCartOpen] = useState(false);


    const showOrders = (orders?: TypeOfArgumentBasket[]) => {
        let summa = 0;
        if (Array.isArray(orders)) {
          orders.forEach((el: TypeOfArgumentBasket) => summa += Number.parseFloat(el.price))
          return(
            <div>
              {orders.map((el) => (
                <Order key={el.id} item={el} {...el} onDelete={onDelete}/>
              ))}
               <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
            </div>
          )
        }
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
                {orders !== undefined && orders.length > 0 ? showOrders(orders) : showNothing()}
            </div>
            )}
        </>
        
    )

} 