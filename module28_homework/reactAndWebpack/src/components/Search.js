import React from 'react';

import "../styles/Search.css"
import CarList from './containers/CarList';
import SearchCar from './containers/SearchCar';

function Search() {
    return (
        <main>
            <SearchCar />
            <CarList cars={[]}/>
        </main>
    );
}

export default Search;
