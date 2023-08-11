import './Header.scss';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { Basket } from '../Basket/Basket';
import React from 'react';
import { dataType } from '../../../dataTypes';

interface HeaderItemType extends dataType {
  onDelete: (item: number) => void;
}

interface TypeOfArgumentHeader extends HeaderItemType {
  orders: HeaderItemType[];
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<TypeOfArgumentHeader> = ({ orders, onDelete, inputHandler }) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <span className='logo'>Dobra Hata</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <SearchPanel inputHandler={inputHandler}/>
        <Basket orders={orders} {...orders[0]} onDelete={onDelete} ></Basket>
      </div>
      <div className='presentation'></div>
    </header>
  );
};