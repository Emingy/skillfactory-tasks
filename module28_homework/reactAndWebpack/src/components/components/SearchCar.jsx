import React, { useEffect, useState } from 'react';
import map from '../../img/map.svg';
import { useHistory } from 'react-router-dom';

export const SearchCar = ({ searchCar }) => {
    let params = (new URL(document.location)).searchParams; 
    const [city, setCity] = useState(decodeURI(params.get("city")));
    const [date, setDate] = useState(decodeURI(params.get("date")));
    const [category, setCategory] = useState(decodeURI(params.get("category")));
    const [price, setPrice] = useState(decodeURI(params.get("price")));
    const [transmission, setTransmission] = useState(decodeURI(params.get("transmission")));
    const [engine, setEngine] = useState(decodeURI(params.get("engine")));
    const [drive, setDrive] = useState(decodeURI(params.get("drive")));
    const history = useHistory()
    const onSearchButtonClick = () => {
        const url = `/Search?city=${city}&date=${date}&category=${category}&price=${price}&transmission=${transmission}&engine=${engine}&drive=${drive}`
        history.push(url.replace(/\s+/g,''));
        searchCar()
    };

    const onChangeSity = e => {
        if(e.target.value!=''){
            setCity(e.target.value);
        }
    }
    const onChangeDate = e => {
        if(e.target.value!=''){
            setDate(e.target.value);
        }
    }
    const onChangeCategory = e => {
        if(e.target.value!=''){
            setCategory(e.target.value);
        }
    }

    const onClickFilterButton = e => {
        const text = e.target.dataset.text.split(',');
        if (e.target.dataset.num < 2){
            e.target.dataset.num = e.target.dataset.num*1+1
        }else{
            e.target.dataset.num = 0
        }
        e.target.firstChild.data = text[e.target.dataset.num];
        switch (e.target.id){
            case 'price':
                if (e.target.firstChild.data!=text[0]){
                    setPrice(e.target.firstChild.data.toLowerCase())
                }else{
                    setPrice('all')
                };
                break
            case 'transmission':
                if (e.target.firstChild.data!=text[0]){
                    setTransmission(e.target.firstChild.data.toLowerCase())
                }else{
                    setTransmission('all')
                };
                break
            case 'engine':
                if (e.target.firstChild.data!=text[0]){
                    setEngine(e.target.firstChild.data.toLowerCase())
                }else{
                    setEngine('all')
                };
                break
            case 'drive':
                if (e.target.firstChild.data!=text[0]){
                    setDrive(e.target.firstChild.data.toLowerCase())
                }else{
                    setDrive('all')
                };
                break
        }

    }
    return(
        <>
            <div className='m-rent-search-form'>
                <input type='text' className='m-rent-search-form__city' placeholder='Местоположение' onChange={onChangeSity} />
                <input type='date' className='m-rent-search-form__date' placeholder='Период аренды' onChange={onChangeDate} />
                <input type='text' className='m-rent-search-form__category' placeholder='Категория' onChange={onChangeCategory} />
                <button className='m-rent-search-form__submit' onClick={onSearchButtonClick}>Найти</button>
            </div>
            <div className='m-rent-search-filter'>
                <button data-num='0' data-text='Любая цена, до 5000, от 5000' id='price' onClick={onClickFilterButton}>{price=='all'? 'Любая цена' : price}</button>
                <button data-num='0' data-text='Любые КПП, Автоматическая, Механическая' id='transmission' onClick={onClickFilterButton}>{transmission=='all'? 'Любые КПП' : transmission}</button>
                <button data-num='0' data-text='Любой привод, Передний, Задний' id='drive' onClick={onClickFilterButton}>{drive=='all'? 'Любой привод' : drive}</button>
                <button data-num='0' data-text='Любые двигатели, Бензин, Дизель' id='engine' onClick={onClickFilterButton}>{engine=='all'? 'Любые двигатели' : engine}</button>
                <div className='m-rent-search-filter-map'>
                    <img src={map} />
                    <p>Показать карту</p>
                </div>
            </div>
        </>
    )
};