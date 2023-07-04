import '../../app/App.scss';
import './ItemPage.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { RenderItemImage } from '../components/Items/RenderItemImage';
import { Link } from "react-router-dom";
import { IoCaretBackOutline } from 'react-icons/io5'

const ItemPage = ({ items }) => {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId));

  if (!item) {
    return <ErrorPage />;
  }

  return (
    <div className="item-page">
      
        <div className='item-page__window'>
          
          <Link to={`/`} >
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

ItemPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemPage;