import './Product.scss';
import { RenderItemImage } from '../Products/RenderItemImage';
import { useState } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import { dataType } from '../../../dataTypes';

interface TypeOfArgumentProduct {
  item: dataType;
  onAdd: (item: dataType) => void;
  onItemClick: (item: dataType) => void;
} 

const Product: React.FC<TypeOfArgumentProduct> = ({ item, onAdd }) => {

  const [selectedItem, setSelectedItem] = useState<boolean>(false);

  const handleItemClick = () => {
    setSelectedItem(!selectedItem);
  };

  const handleAddToCart = (item: dataType) => {
    onAdd(item);
  };

  return (
    <>
      <div className='item'>
        <div onClick={handleItemClick}>
          <RenderItemImage item={item}/>
        </div>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <button onClick={() => handleAddToCart(item)} className='add-to-cart'>+</button>
        <button className='button--more-info'>
          <Link className='link--more-info' to={`/itemPage/${item.id}`} >більше інформації</Link>
        </button>
      </div>
      {selectedItem && (
        <div className={'more-info--acive'} onClick={handleItemClick}>
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

export default Product;
