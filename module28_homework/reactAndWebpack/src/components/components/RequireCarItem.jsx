import React from 'react';
import human from '../../img/humanRentCar.jpg';

export const RequireCarItem = ({ car }) => (
    <div>
        <img src={human} />
        <h6>{ car.name }, { car.yearIssue }</h6>
        <p>от { car.price1 } ₽/сутки</p>
    </div>
)