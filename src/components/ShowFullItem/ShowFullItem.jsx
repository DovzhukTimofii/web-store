import './ShowFullItem.scss';
import PropTypes from 'prop-types';

export const ShowFullItem = ({item, onShowItem }) => {
    return (
        <div className='full-item'>
            <div>
                <img src={`../../../public/img/photoOfItme/${item.img}`} alt={item.title} onClick={() => onShowItem(item)} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
               
            </div>
        </div>
    )
};

ShowFullItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired,
    onShowItem: PropTypes.func.isRequired
};