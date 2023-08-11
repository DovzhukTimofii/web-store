import './Order.scss';
import PropTypes from 'prop-types';
import {FaTrash} from 'react-icons/fa'
import { RenderItemImage } from '../Products/RenderItemImage';
import React from 'react';
import { dataType } from '../../../dataTypes';

interface TypeOfArgumentOrder extends dataType {
    item: dataType;
    onDelete: (item: number) => void;
}

export const Order: React.FC<TypeOfArgumentOrder> = ({ item, onDelete}) => {
    return (
        <div className='item-order'>
            <div className='order-size-model'><RenderItemImage item={item}/></div>
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
        </div>
    )
}
