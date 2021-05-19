import React, { useEffect } from 'react';
import { CardData } from './CardData';

export const CarCard = ({ car, getCard, isLoading }) => {

    useEffect(()=> {
        getCard();
    },[]);
    return (
        <>
            {isLoading && (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)}
            {car.map((car,i)=> <CardData car={car} key={i}/>)}
        </>
    )
}

