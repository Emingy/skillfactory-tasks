import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "../styles/addCars.css"
import { AddDataToState } from './actions/addCar';
class addCarsStepOne extends React.Component{
    constructor(props){
        super(props)
    }
    submit = event => {
        const data = {
            brand: document.getElementById('brand').value,
            model: document.getElementById('model').value,
            yearIssue  : document.getElementById('year').value,
            governmentNumber: document.getElementById('num').value,
            vin: document.getElementById('vin').value,
            color: document.getElementById('color').value,
            Enginefuel: document.getElementById('enginetype').value,
            Enginevolume: document.getElementById('enginevolume').value,
            Enginepower: document.getElementById('enginepower1').value+''+document.getElementById('enginepower2').value,
            transmission: document.getElementById('transmission').value,
            mileage: document.getElementById('mileage').value,
            VPSerialAndNumber: document.getElementById('PTS').value,
            VRCSerialAndNumber: document.getElementById('STS').value,
            PriceOne: document.getElementById('price1').value,
            PriceTwo: document.getElementById('price2').value,
            PriceThree: document.getElementById('price3').value,
            Osago: document.getElementById('osago').value,
            Kasko: document.getElementById('kasko').value
        }
        this.props.AddDataToState(data)
        // localStorage.setItem('data', data);
        this.props.history.push('/addCars/steptwo');
    }

    render(){
        return (
            <main>
                <p className='b-main-addCars-steps'>Шаг 1 из 4</p>
                <h2 className='b-main-addCars-headline'>Новый автомобиль</h2>
                <p className='b-main-addCars-info-headline'>Информация об автомобиле</p>
                <div className='b-main-addCars-info'>
                    <div>
                        <p>Марка</p>
                        <input className='wide' id='brand' type='text'/>
                    </div>
                    <div>
                        <p>Модель</p>
                        <input className='wide' id='model' type='text'/>
                    </div>
                    <div>
                        <p>Год выпуска</p>
                        <input className='thin' id='year' type='text'/>
                    </div>
                    <div>
                        <p>Гос. номер</p>
                        <input className='thin' id='num' type='text'/>
                    </div>
                    <div>
                        <p>VIN</p>
                        <input className='wide' id='vin' type='text'/>
                    </div>
                    <div>
                        <p>Цвет</p>
                        <input className='wide' id='color' type='text'/>
                    </div>
                </div>
                <div className='b-main-addCars-info-two'>
                    <div>
                        <p>Тип двигателя</p>
                        <input className='wide' id='enginetype' type='text'/>
                    </div>
                    <div>
                        <p>Объем</p>
                        <input className='thin' id='enginevolume' type='text'/>
                    </div>
                    <div>
                        <p>Мощность</p>
                        <div>
                            <input className='thin' id='enginepower1' type='text'/>
                            <input className='thin ml-10' id='enginepower2' type='text'/>
                        </div>
                    </div>
                    <div>
                        <p>Трансмиссия</p>
                        <input className='wide' id='transmission' type='text'/>
                    </div>
                </div>
                <div className='b-main-addCars-info-three'>
                    <div>
                        <p>Пробег</p>
                        <input className='thin' id='mileage' type='text'/>
                    </div>
                    <div>
                        <p>Серия и номер ПТС</p>
                        <input className='wide' id='PTS' type='text'/>
                    </div>
                    <div>
                        <p>Серия и номер СТС</p>
                        <input className='wide' id='STS' type='text'/>
                    </div>
                </div>
                <p className='b-main-addCars-price-headline'>Стоимость аренды</p>
                <div className='b-main-addCars-price'>
                    <div>
                        <p>Обычная цена</p>
                        <input className='thin' id='price1' type='text'/>
                    </div>
                    <div>
                        <p>Цена при аренде на 3 дня</p>
                        <input className='thin' id='price2' type='text'/>
                    </div>
                    <div>
                        <p>Цена при аренде более 5 дней</p>
                        <input className='thin' id='price3' type='text'/>
                    </div>
                </div>
                <p className='b-main-addCars-insurance-headline'>Страхование</p>
                <div className='b-main-addCars-insurance'>
                    <div>
                        <p>Полис ОСАГО</p>
                        <input className='wide' id='osago' type='text'/>
                    </div>
                    <div>
                        <p>Полис КАСКО (если есть)</p>
                        <input className='wide' id='kasko' type='text'/>
                    </div>
                </div>
                <div className='b-main-addCars-submit'>
                    <button onClick={this.submit}>Продолжить</button>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return state
}

const mapDispatchToProps = {
    AddDataToState
}

export default withRouter(connect(null, mapDispatchToProps)(addCarsStepOne));
