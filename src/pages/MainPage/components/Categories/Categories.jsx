import './Categories.scss';
import filterOfCategories from './Categories.json'
import PropTypes from 'prop-types';

export const Categories = ({ chooseCategory }) => {
    return (
        <div className='categories'>
            {filterOfCategories.map((el) => (
                <div key={el.key} onClick={() => chooseCategory(el.key)} >{el.name}</div>
            ))}
        </div>
    )
}

Categories.propTypes = {
    chooseCategory: PropTypes.func.isRequired,
}