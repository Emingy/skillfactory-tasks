import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import '../styles/signUp.css';
import arrowBack from '../img/arrow-back.svg'
import cam from '../img/cam.svg'

function SignUpStepTwo (props) {

    const history = useHistory();

    
    function error(){
        let errorForm = document.getElementById('error-form');
        let errorFormText = document.getElementById('error-form-text');
        errorForm.style.height='58px';
        errorFormText.style.display='block';
        setInterval(()=>{
            errorForm.style.height='0px';
            errorFormText.style.display='none';
        },3000)
    }
    function redirect(url){
        history.push(url)
    }
    function back(){
        redirect('/signUp/stepone')
    }
    function onSubmit(){
        let data = {
            name: name,
            birthDate: birthdate,
            email: email,
            mobile: mobile,
            passportSerialNumber: passportSerialNumber,
            passportDateIssue: passportDateIssue,
            passportIssuedBy: passportIssuedBy,
            passportCode: passportCode,
            driveSerialNumber: driveSerialNumber,
            driveDateIssue: driveDateIssue,
            password: password
        }
        Axios.post('http://localhost:8000/signUp', data)
            .catch(()=>{
                error()
            })
            .then(res=>res.data)
            .then(data=>{
                if(data.split(':')[1]=='200'){
                    redirect('/signUp/steptwo');
                }else{
                    error()
                }
            });
    }
    return (
        <div className='b-signup'>
            <div className='b-signup-back' onClick={back}>
                <img className='b-signup-back-arrow__back' src={arrowBack}></img>
                <p>Назад</p>
            </div>
            <p className='b-signup-step'>Шаг 2 из 3</p>
            <h1 className='b-signup-headline'>Загрузите своё фото</h1>
            <h3 className='b-signup-description'>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h3>
            <div className='b-signup-photo-dropdown'>
                <div>
                    <img src={cam}></img>
                </div>
            </div>
            <div className='b-signup-submit'>
                <input id='b-signup-submit' type='submit' value='Продолжить' onClick={onSubmit} disabled/>
            </div>
        </div>
    );
}

export default SignUpStepTwo