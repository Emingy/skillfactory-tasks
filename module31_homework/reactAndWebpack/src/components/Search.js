import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import "../styles/Search.css"
import { GET_CARS } from '../utils/graphql-requests';
import { CarItem } from './CarItem';
import SearchCar from './containers/SearchCar';

function Search() {
    let params = (new URL(document.location)).searchParams; 
    const vari = {
        variables:{
            getCarsInput: {
                "price": params.get("price"),
                "transmission": params.get("transmission"),
                "drive": params.get("drive"),
                "engine": params.get("engine")
            }
        }
    }
    console.log(vari)
    const {
        loading,
        error,
        data: { Car: cars } = {}
    } = useQuery(GET_CARS, {
        variables: {
            getCarsInput: {
                price: "all",
                transmission: "all",
                drive: "all",
                engine: "all"
            }
        }
    });
    console.log('ok', loading)
    console.log('not ok', error)
    console.log('cars ', cars)
    return (
        <main>
            <SearchCar />
            {loading ? <p>Loading...</p> : cars.map(car => <CarItem car={car} />)}
        </main>
    );
}

export default Search;
