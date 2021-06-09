import React from 'react';
import carImg from '../img/car.jpg';
import star from '../img/star.svg';
import engine from '../img/engine.svg';
import transmission from '../img/transmission.svg';

export const CarItem = ({ car }) => (
    <div className='m-rent-search-data__car'>
        <img src={carImg} className='m-rent-search-data__car-photo'/>
        <div className='m-rent-search-data__car-description'>
            <div className='m-rent-search-data__car-description-vote'>
                <img src={star}/>
                <p className='m-rent-search-data__car-description-vote-rating'>4,5</p>
                <p className='m-rent-search-data__car-description-vote-number'>(12)</p>
            </div>
            <p className='m-rent-search-data__car-description-name'>{car.name}, {car.yearIssue}</p>
            <div className='m-rent-search-data__car-description-characteristic'>
                <div className='m-rent-search-data__car-description-characteristic-engine'>
                    <img src={engine}/>
                    <p>{car.engineVolume} л / {car.enginePower} л.с. / {car.engineFuel}</p>
                </div>
                <div className='m-rent-search-data__car-description-characteristic-transmission'>
                    <img src={transmission}/>
                    <p>{car.transmission} /  {car.drive} привод</p>
                </div>
            </div>
            <p className='m-rent-search-data__car-description-price'>{car.price1} ₽ в сутки</p>
        </div>
        <button>Арендовать</button>
    </div>
)