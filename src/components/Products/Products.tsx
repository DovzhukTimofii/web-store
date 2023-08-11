import './Products.scss';
import Product from '../Product/Product';
import React from 'react';
import { dataType } from '../../../dataTypes';

interface TypeOfArgumentProducts {
  items: dataType[],
  onAdd: (item: dataType) => void,
  inputText: string
}

const Products: React.FC<TypeOfArgumentProducts> = ({ items, onAdd, inputText }) => {
  

  const filteredData = items.filter((el) => {

    if (inputText === '') {
        return el;
    }
    else {
        return el.title.toLowerCase().includes(inputText)
    }
  })

  const handleItemClick = (item: dataType) => {
    onAdd(item);
  };

  return (
    <main className='main'>
      {filteredData.map((item) => (
        <Product onItemClick={handleItemClick} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
};


export default Products;