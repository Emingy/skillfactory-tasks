import React from 'react';

import "../styles/addCars.css"
import arrowBack from '../img/arrow-back-green.svg'
import optionCarAux from '../img/option-car-aux.svg'
import optionCarBluetooth from '../img/option-car-bluetooth.svg'
import optionCarCamera from '../img/option-car-camera.svg'
import optionCarConditioner from '../img/option-car-conditioner.svg'
import optionCarCruise from '../img/option-car-cruise.svg'
import optionCarHeater from '../img/option-car-heater.svg'
import optionCarIosfix from '../img/option-car-iosfix.svg'
import optionCarMultimedia from '../img/option-car-multimedia.svg'
import optionCarNavigation from '../img/option-car-navigation.svg'
import optionCarParktronic from '../img/option-car-parktronic.svg'
import optionCarRoofrack from '../img/option-car-roofrack.svg'
import optionCarSafetyBag from '../img/option-car-safetyBag.svg'
import optionCarSeatheat from '../img/option-car-seatheat.svg'
import optionCarSeatvent from '../img/option-car-seatvent.svg'
import { withRouter } from 'react-router';
import { AddDataToState } from './actions/addCar';
import { connect } from 'react-redux';

class addCarsStepTwo extends React.Component {
    constructor(props){
        super(props)
    }
    submit = event => {
        const options = {Options:{
            aux: document.getElementById('aux').checked,
            bluetooth: document.getElementById('bluetooth').checked,
            camera: document.getElementById('camera').checked,
            conditioner: document.getElementById('conditioner').checked,
            cruiz: document.getElementById('cruiz').checked,
            heat: document.getElementById('heat').checked,
            iosfix: document.getElementById('iosfix').checked,
            multi: document.getElementById('multi').checked,
            nav: document.getElementById('nav').checked,
            park: document.getElementById('park').checked,
            trunk: document.getElementById('trunk').checked,
            bag: document.getElementById('bag').checked,
            heatseat: document.getElementById('heatseat').checked,
            ventseat: document.getElementById('ventseat').checked
        }}
        const data = {...options, AdditionalServices:{
            babychair: document.getElementById('babychair').checked,
            delivery: document.getElementById('delivery').checked,
            anyplace: document.getElementById('anyplace').checked,
            fulltank: document.getElementById('fulltank').checked
        }}
        this.props.AddDataToState(data)
        // localStorage.setItem('data', data);
        this.props.history.push('/addCars/stepthree');
    }
    render (){
        return(
            <main>
                <div className='b-main-addCars-back'>
                    <img src={arrowBack}/>
                    <p>Назад</p>
                </div>
                <p className='b-main-addCars-steps'>Шаг 2 из 4</p>
                <h2 className='b-main-addCars-headline'>Дополнительно</h2>
                <p className='b-main-addCars-options-headline'>Опции автомобиля</p>
                <div className='b-main-addCars-options'>
                    <div>
                        <img src={optionCarAux}/>
                        <p>AUX-кабель</p>
                        <label className="switch">
                            <input type="checkbox" data-option='aux' id='aux'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarBluetooth} />
                        <p>Поддержка Bluetooth</p>
                        <label className="switch">
                            <input type="checkbox" data-option='bluetooth' id='bluetooth'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarCamera} />
                        <p>Камера заднего вида</p>
                        <label className="switch">
                            <input type="checkbox" data-option='camera' id='camera'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarConditioner} />
                        <p>Кондиционер</p>
                        <label className="switch">
                            <input type="checkbox" data-option='conditioner' id='conditioner'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarCruise} />
                        <p>Круиз-контроль</p>
                        <label className="switch">
                            <input type="checkbox" data-option='cruiz' id='cruiz'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarHeater} />
                        <p>Автономный подогреватель</p>
                        <label className="switch">
                            <input type="checkbox" data-option='heat' id='heat'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarIosfix} />
                        <p>Крепления Iosfix</p>
                        <label className="switch">
                            <input type="checkbox" data-option='iosfix' id='iosfix'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarMultimedia} />
                        <p>Мультимедия</p>
                        <label className="switch">
                            <input type="checkbox" data-option='multi' id='multi'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarNavigation} />
                        <p>Навигация</p>
                        <label className="switch">
                            <input type="checkbox" data-option='nav' id='nav'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarParktronic} />
                        <p>Парктроники</p>
                        <label className="switch">
                            <input type="checkbox" data-option='park' id='park'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarRoofrack} />
                        <p>Багажник на крыше</p>
                        <label className="switch">
                            <input type="checkbox" data-option='trunk' id='trunk'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarSafetyBag} />
                        <p>Подушки безопасности</p>
                        <label className="switch">
                            <input type="checkbox" data-option='bag' id='bag'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarSeatheat} />
                        <p>Подогрев сидений</p>
                        <label className="switch">
                            <input type="checkbox" data-option='heatseat' id='heatseat'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <img src={optionCarSeatvent} />
                        <p>Вентиляция сидений</p>
                        <label className="switch">
                            <input type="checkbox" data-option='ventseat' id='ventseat'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <p className='b-main-addCars-services-headline'>Дополнительные услуги</p>
                <div className='b-main-addCars-services'>
                    <div>
                        <div>
                            <div className='b-main-addCars-services-service-desc'>
                                <p className='headline'>Детское кресло</p>
                                <p className='desc'>Сдавайте кресло в аренду и получайте дополнительный заработок</p>
                            </div>
                            <div className='b-main-addCars-services-service-price'>
                                <p>1 000 ₽</p>
                            </div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" data-service='babychair' id='babychair'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <div>
                            <div className='b-main-addCars-services-service-desc'>
                                <p className='headline'>Доставка автомобиля</p>
                                <p className='desc'>Привезите автомобиль в удобное для арендатора место и получите доход</p>
                            </div>
                            <div className='b-main-addCars-services-service-price'>
                                <p>1 000 ₽</p>
                            </div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" data-service='delivery' id='delivery'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <div>
                            <div className='b-main-addCars-services-service-desc'>
                                <p className='headline'>Завершение аренды в любом месте</p>
                                <p className='desc'>Заберите автомобиль в удобном для арендатора месте за доп. доход</p>
                            </div>
                            <div className='b-main-addCars-services-service-price'>
                                <p>1 000 ₽</p>
                            </div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" data-service='anyplace' id='anyplace'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <div>
                            <div className='b-main-addCars-services-service-desc'>
                                <p className='headline'>Полный бак</p>
                                <p className='desc'>Заправьте полный бак перед сдачей в аренду</p>
                            </div>
                            <div className='b-main-addCars-services-service-price'>
                                <p>1 000 ₽</p>
                            </div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" data-service='fulltank' id='fulltank'/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className='b-main-addCars-submit'>
                    <button onClick={this.submit}>Продолжить</button>
                </div>
            </main>
        )

    }
        
}

const mapStateToProps = state => {
    console.log(state)
    return state
}

const mapDispatchToProps = {
    AddDataToState
}

export default withRouter(connect(null, mapDispatchToProps)(addCarsStepTwo));
