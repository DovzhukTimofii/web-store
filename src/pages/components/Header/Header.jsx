import './Header.scss';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import PropTypes from 'prop-types';
import { Basket } from '../Basket/Basket';


export const Header = ({ orders, onDelete, inputHandler }) => {
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
        <Basket orders={orders} onDelete={onDelete}></Basket>
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