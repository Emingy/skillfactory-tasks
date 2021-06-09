import React from 'react';

import "../styles/MainRent.css"
import human from '../img/humanRentCar.jpg';
import SearchCar from './containers/SearchCar';
import RequireCarList from './containers/RequireCarList';
function Rent() {
    return (
        <main>
            <h2 className='m-rent-headline'>Арендуйте автомобиль</h2>
            
            <SearchCar />
            {/* <div className='m-rent-search-form'>
                <input type='text' className='m-rent-search-form__city' placeholder='Местоположение' />
                <input type='date' className='m-rent-search-form__date' placeholder='Период аренды' />
                <input type='text' className='m-rent-search-form__category' placeholder='Категория' />
                <submit className='m-rent-search-form__submit'>Найти</submit>
            </div> */}
            <h4 className='m-rent-require-headline'>Рекомендуем поблизости</h4>
            <RequireCarList cars={[]}/>
            {/* <div className='m-rent-require'>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
                <div>
                    <img src={human} />
                    <h6>BMW 3-series, 2019</h6>
                    <p>от 3 000 ₽/сутки</p>
                </div>
            </div> */}
        </main>
    );
}

export default Rent;
