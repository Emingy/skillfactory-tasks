import React from 'react';

import "../styles/myCars.css"
import myCarsImg from '../img/myCars.svg';


function myCars() {
    return (
        <main>
            <img src={myCarsImg} className='b-main-myCars-pic'></img>
            <h2 className='b-main-myCars-headline'>Зарабатывайте на своём автомобиле</h2>
            <p className='b-main-myCars-desc'>Сдавайте автомобиль в аренду и получайте заработок.</p>
            <button className='b-main-myCars-button'>Добавить автомобиль</button>
        </main>
    );
}

export default myCars;
