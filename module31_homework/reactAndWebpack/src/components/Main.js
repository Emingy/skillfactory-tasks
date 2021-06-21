import React from 'react';
import { ACCESS_TOKEN_KEY } from './constants';
import Homepage from './Homepage';
import Rent from './Rent';

const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

function Main() {
    return (
        <main>
            {accessToken ? <Rent/> : <Homepage/>}
        </main>
    );
}

export default Main;
