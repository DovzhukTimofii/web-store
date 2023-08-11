import './Container.scss';
import React, { ReactNode } from 'react';

interface TypeOfArgumentContainer {
    children: ReactNode
}

export const Container: React.FC<TypeOfArgumentContainer> = ({ children }) => {
    return (
    <div className='container'>{children}</div>
    )
}