import '../../app/App.scss';
import './ItemPage.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { RenderItemImage } from '../../components/Products/RenderItemImage';
import { Link } from "react-router-dom";
import { IoCaretBackOutline } from 'react-icons/io5'
import React from 'react';
import { dataType } from '../../../dataTypes';

interface TypeOfArgumentItemPage extends dataType {
  items: dataType[]
}

const ItemPage: React.FC<TypeOfArgumentItemPage> = ({ items }) => {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId));

  if (!item) {
    return <ErrorPage />;
  }

  return (
    <div className="item-page">
      
        <div className='item-page__window'>
          
          <Link to={`/web-store/`} >
            <IoCaretBackOutline className='link__back-to-home' />
          </Link>
          
          <RenderItemImage item={item}/>

          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <b>{item.price}$</b>
        </div>
    </div>
  );
};



export default ItemPage;