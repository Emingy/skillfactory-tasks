import React from 'react';
import carImg from '../img/car.jpg';
import star from '../img/star.svg';
import engine from '../img/engine.svg';
import transmission from '../img/transmission.svg';
import { useHistory } from 'react-router-dom';

export const CarItem = ({ car }) => {
    const history = useHistory()
    const redirect = () => {
        history.push(`/Car?id=${ car.id }`);

    }
    return(
        <div className='m-rent-search-data__car'>
            <img src={carImg} className='m-rent-search-data__car-photo'/>
            <div className='m-rent-search-data__car-description'>
                <div className='m-rent-search-data__car-description-vote'>
                    <img src={star}/>
                    <p className='m-rent-search-data__car-description-vote-rating'>4,5</p>
                    <p className='m-rent-search-data__car-description-vote-number'>(12)</p>
                </div>
                <a href={`/Car?id=${ car.id }`} className='m-rent-search-data__car-description-name'>{car.brand} {car.model}, {car.yearIssue}</a>
                <div className='m-rent-search-data__car-description-characteristic'>
                    <div className='m-rent-search-data__car-description-characteristic-engine'>
                        <img src={engine}/>
                        <p>{car.Engnevolume} / {car.Enginepower} / {car.Enginefuel}</p>
                    </div>
                    <div className='m-rent-search-data__car-description-characteristic-transmission'>
                        <img src={transmission}/>
                        <p>{car.transmission} /  {car.drive} привод</p>
                    </div>
                </div>
                <p className='m-rent-search-data__car-description-price'>{car.Priceone} ₽ в сутки</p>
            </div>
            <button>Арендовать</button>
        </div>
    )
}