import React from 'react';
import './Cards.css'
export const Card = ({title, number}) => {
    return <div className='card' >
        <div className='card-body'>
            <p className='card-title'>{title}</p>
            <p className='card-text'>{number}</p>
        </div>
    </div>
}