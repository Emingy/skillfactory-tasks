import React, { useEffect } from 'react';
import { CarItem } from './CarItem'
import { getCars } from './carsAction';

const mapDispatchToProps = dispatch => ({
    getCars: () => dispatch(getCars())
})

export const CarList = ({ cars, getCars }) => {
    useEffect(() => {
        getCars();
    }, []);
    return (
        <div className='m-rent-search-data'>
            {cars.map(car => <CarItem car={car} />)}
        </div>
    );
}
