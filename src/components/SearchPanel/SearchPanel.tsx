import React from 'react';
import './SearchPanel.scss';

interface SearchPanelProps {
    inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ inputHandler }) => {
    return (
        <div className="search-panel">
            <input type="text" className='searchPanel' onChange={inputHandler} placeholder='пошук товару' />
        </div>
    );
};

