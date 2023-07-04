import './Item.scss';
import PropTypes from 'prop-types';
import { RenderItemImage } from '../Items/RenderItemImage';
import { useState } from 'react';

const Item = ({ item, onAdd }) => {

  const [selectedItem, setSelectedItem] = useState(false);

  const handleItemClick = () => {
    setSelectedItem(!false);
  };

  const handleAddToCart = () => {
    onAdd(item);
  };

  return (
    <>
      <div className='item'>
        <div onClick={() => handleItemClick(item)}>
          <RenderItemImage item={item}/>
        </div>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <button onClick={handleAddToCart} className='add-to-cart'>+</button>
        <button className='button--more-info' onClick={() => handleItemClick(item)}>більше інформації</button>
      </div>
      {selectedItem && (
          <div className={'more-info--acive'} onClick={() => setSelectedItem(false)}>
            <div>
              <RenderItemImage item={item}/>
              <h2>{item.title}</h2>
              <b>{item.price}$</b>
              <p>{item.desc}</p>
            </div>
          </div>
      )}
    </>
    
    
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Item;
