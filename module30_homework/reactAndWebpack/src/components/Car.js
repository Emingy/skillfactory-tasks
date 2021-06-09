import React from 'react';

import "../styles/Car.css"
import car from '../img/car.jpg';
import star from '../img/star.svg';
import back from '../img/arrow-back-green.svg';
import owner from '../img/owner.png';
import carOption from '../img/car-option.svg';
import CarCard from './containers/CarCard';

function Car() {
    return (
        <main>
            <CarCard car={[]}/>
            {/* <div className='m-car-back'>
                <img src={back}/>
                <p>Назад</p>
            </div>
            <div className='m-car-photos'>
                <img src={car}/>
                <div className='m-car-photos-morephoto'>
                    <img className='m-car-photos-morephoto-onephoto' src={car} />
                    <div className='m-car-photos-morephoto-photos'>
                        <p>+ еще N фото</p>
                    </div>
                </div>
            </div>
            <div className='m-car-description'>
                <div className='m-car-description-characteristics'>
                    <h4>Hyundai Solaris, 2018</h4>
                    <div className='m-car-description-characteristics-prices'>
                        <div className='m-car-description-characteristics-prices-rent'>
                            <p className='m-car-description-characteristics-prices-rent-price'>1 800 ₽/сут.</p>
                            <p className='m-car-description-characteristics-prices-rent-description'>обычная аренда</p>
                        </div>
                        <div className='m-car-description-characteristics-prices-3daysrent'>
                            <p className='m-car-description-characteristics-prices-rent-price'>1 600 ₽/сут.</p>
                            <p className='m-car-description-characteristics-prices-rent-description'>при аренде на 3 дня</p>
                        </div>
                        <div className='m-car-description-characteristics-prices-more5daysrent'>
                            <p className='m-car-description-characteristics-prices-rent-price'>1 400 ₽/сут.</p>
                            <p className='m-car-description-characteristics-prices-rent-description'>при аренде более 5 дней</p>
                        </div>
                    </div>
                    <div className='m-car-description-characteristics-characteristics'>
                        <h5>Характеристики</h5>
                        <div className='m-car-description-characteristics-characteristics-columns'>
                            <div className='m-car-description-characteristics-characteristics-columns-column1'>
                                <p>Год выпуска</p>
                                <p>Кузов</p>
                                <p>Двигатель</p>
                                <p>Трансмиссия</p>
                                <p>Привод</p>
                                <p>Пробег</p>
                            </div>
                            <div className='m-car-description-characteristics-characteristics-columns-column2'>
                                <p>2018 год</p>
                                <p>Седан</p>
                                <p>1.6 л / 123 л.с. / бензин</p>
                                <p>Автоматическая</p>
                                <p>Передний</p>
                                <p>125 000 км</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-car-description-owner'>
                    <div>
                        <img src={owner} />
                        <div>
                            <h6>Иван И.</h6>
                            <p>Владелец</p>
                        </div>
                    </div>
                    <a>Посмотреть профиль</a>
                </div>
            </div>
            <div className='m-car-option'>
                <h5>Опции</h5>
                <div className='m-car-option__grid'>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src={carOption} />
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className='m-car-calendar'>
                <h5>Доступность</h5>
                <div className='m-car-calendar__flex'>
                    <div className='m-car-calendar__flex-monthOne'>
                        <h6>Май 2020</h6>
                        <table>
                            <tbody>
                                <tr className='calendar-day'>
                                    <td>пн</td>
                                    <td>вт</td>
                                    <td>ср</td>
                                    <td>чт</td>
                                    <td>пт</td>
                                    <td>сб</td>
                                    <td>вс</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='m-car-calendar__flex-monthTwo'>
                        <h6>Июнь 2020</h6>
                        <table>
                            <tbody>
                                <tr className='calendar-day'>
                                    <td>пн</td>
                                    <td>вт</td>
                                    <td>ср</td>
                                    <td>чт</td>
                                    <td>пт</td>
                                    <td>сб</td>
                                    <td>вс</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>30</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='m-car-vote'>
                <h5>Отзывы</h5>
                <div className='m-car-vote-rating'>
                    <img src={star} />
                    <p className='m-car-vote-rating-number'>4,5 </p>
                    <p className='m-car-vote-rating-amount'>(4 отзыва)</p>
                </div>
                <div className='m-car-vote-grid'>
                    <div>
                        <div>
                            <img src={owner} />
                            <div>
                                <h6>Владимир И.</h6>
                                <p>Март 2020</p>
                            </div>
                        </div>
                        <p>Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зря Солярис берут таксисты. Владелец общительный, показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>
                    </div>
                    <div>
                        <div>
                            <img src={owner} />
                            <div>
                                <h6>Владимир И.</h6>
                                <p>Март 2020</p>
                            </div>
                        </div>
                        <p>Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зря Солярис берут таксисты. Владелец общительный, показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>
                    </div>
                    <div>
                        <div>
                            <img src={owner} />
                            <div>
                                <h6>Владимир И.</h6>
                                <p>Март 2020</p>
                            </div>
                        </div>
                        <p>Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зря Солярис берут таксисты. Владелец общительный, показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>
                    </div>
                    <div>
                        <div>
                            <img src={owner} />
                            <div>
                                <h6>Владимир И.</h6>
                                <p>Март 2020</p>
                            </div>
                        </div>
                        <p>Отличный автомобиль за эти деньги. Динамики для города достаточно, расход также небольшой, не зря Солярис берут таксисты. Владелец общительный, показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!</p>
                    </div>
                </div>
            </div>
            <div className='m-car-rent'>
                <button>Арендовать</button>
            </div> */}
        </main>
    );
}

export default Car;
