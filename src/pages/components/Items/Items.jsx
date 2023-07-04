import './Items.scss';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const Items = ({ items, onAdd, inputText }) => {
  Items.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
      })
    ).isRequired,
    onAdd: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired
  };

  const filteredData = items.filter((el) => {

    if (inputText === '') {
        return el;
    }
    else {
        return el.title.toLowerCase().includes(inputText)
    }
  })

  const handleItemClick = (item) => {
    onAdd(item);
  };

  return (
    <main className='main'>
      {filteredData.map((item) => (
        <Item onItemClick={handleItemClick} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
};

export default Items;