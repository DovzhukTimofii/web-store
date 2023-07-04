import './Order.scss';
import PropTypes from 'prop-types';
import {FaTrash} from 'react-icons/fa'
import { RenderItemImage } from '../Items/RenderItemImage';

export const Order = ({ item, onDelete}) => {
    return (
        <div className='item-order'>
            <div className='order-size-model'><RenderItemImage item={item}/></div>
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
        </div>
    )
}

Order.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};