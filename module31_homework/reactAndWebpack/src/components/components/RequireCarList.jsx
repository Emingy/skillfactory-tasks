import React, { useEffect } from 'react';
import { RequireCarItem } from './RequireCarItem';
export const RequireCarList = ({ cars, getCars, isLoading }) => {

    useEffect(()=> {
        getCars();
    },[]);
    return (
        <div className='m-rent-require'>
            {cars.map(car=> <RequireCarItem car={car} />)}
        </div>
    )
}

