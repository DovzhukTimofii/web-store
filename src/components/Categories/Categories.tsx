import './Categories.scss';
import filterOfCategories from './Categories.json'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import React from 'react';
import { dataType } from '../../../dataTypes';

interface TypeOfCategories {
  key: string;
  name: string;
}

interface TypeOfArgumentCategories {
  chooseCategory: (item: string) => any
}

export const Categories: React.FC<TypeOfArgumentCategories> = ({ chooseCategory }) => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<TypeOfCategories[]>([]);

    useEffect(() => {
        const simulateBackendRequest = () => {
          setTimeout(() => {
            setIsLoaded(true);
            setItems(filterOfCategories);
          }, 1000); 
        };
    
        simulateBackendRequest();
      }, []);

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><img className='categories--loading' src="../../../public/img/Loading.gif" alt="" /></div>;
      } else {
        return (
          <div className='categories'>
            {items.map((el: TypeOfCategories) => (
              <div key={el.key} onClick={() => chooseCategory(el.key)}>
                {el.name}
              </div>
            ))}
          </div>
        );
      }
    };
    

Categories.propTypes = {
    chooseCategory: PropTypes.func.isRequired,
}