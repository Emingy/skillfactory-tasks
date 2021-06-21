import React, { useEffect } from 'react';
import { CarItem } from './CarItem'
export const CarList = ({ cars, getCars, isLoading }) => {

    useEffect(()=> {
        getCars();
    },[]);
    console.log(cars)
    return (
        <>
        {isLoading && (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>)}
        <div className='m-rent-search-data'>
            {cars.map(car=> 
            <div className='m-rent-search-data__car' data-id={ car.id } key={ car.id }>
                <CarItem car={car} />
            </div>
            )}
        </div>
        </>
    )
}

