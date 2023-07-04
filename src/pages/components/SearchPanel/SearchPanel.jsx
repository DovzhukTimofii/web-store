import './SearchPanel.scss';
import PropTypes from 'prop-types';

export const SearchPanel = ({inputHandler}) => {
    
    return (
        <div className="search-panel">
            <input type="text" className='searchPanel'  onChange={inputHandler} placeholder='пошук товару' />
        </div>
    )
};

SearchPanel.propTypes = {
    inputHandler: PropTypes.func.isRequired,
};