import React from 'react';
import './Cards.css'
import {Card} from './Card';
export const Cards = ({quantityDocument,quantityReviewed,quantityCopie}) => {
    return <div className='container'>
            <div className='document'>
                <Card title='Documentos' number={quantityDocument}/> 
            </div>
            <div className='reviewed'>
                <Card title='Revisados' number={quantityReviewed}/> 
            </div>
            <div className='copies-detected'>
                <Card title='Copias Detectadas' number={quantityCopie}/> 
            </div>
    </div>
}