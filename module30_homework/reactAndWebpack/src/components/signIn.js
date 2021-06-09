import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import { fadeInDownBig } from 'react-animations';
import Portal from './portal';
import {Link} from 'react-router-dom';
import Recovery from './Recovery';
import Axios from 'axios'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

import Close from '../img/module-close.svg';
import SignInPic from '../img/undraw_sign_in.svg';

import '../styles/signIn.css';

const srcSignUpPage = '../signUp/stepone'
const styles = {
    fadeInDownBig: {
      animation: 'x 0.8s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
}
function check(data){
    let email = document.getElementById('modal-input-login');
    let pass = document.getElementById('modal-input-pass');
    if(email.value!='' && pass.value!=''){
        let submit = document.getElementById('modal-button-signIn');
        submit.classList.remove('disable')
        submit.classList.add('active')
        data.setDisabled(false)
    }else{
        let submit = document.getElementById('modal-button-signIn');
        submit.classList.add('disable')
        submit.classList.remove('active')
        data.setDisabled(true)
    }
}
function onSubmit(d){
    let data = {
        email: document.getElementById('modal-input-login').value,
        password: document.getElementById('modal-input-pass').value
    }
    Axios.post('http://localhost:8000/signIn', data)
        .catch(()=>{
            error()
        })
        .then(res=>res.data)
        .then(data=>{
            console.log(data)
            if(data.code=='200'){
                localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
                localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
                d.updateData(false)
            }else{
                console.error('Error')
            }
        });
}
const SignIn = (data) => {
    return(
            <Portal>
                <StyleRoot>
                    <div className='modal' style={styles.fadeInDownBig}>
                        <img src={Close} className='modal-close' onClick={() => {data.updateData(false)}}></img>
                        <img src={SignInPic} className='modal-pic'></img>
                        <h2>Авторизация</h2>
                        <input id='modal-input-login' type='text' placeholder='Электронная почта' className='modal-input-login' onChange={() => check(data)}></input>
                        <input id='modal-input-pass' type='password' placeholder='Пароль' className='modal-input-pass' onChange={() => check(data)}></input>
                        <button onClick={() => onSubmit(data)} className='modal-button-signIn disable' id='modal-button-signIn' disabled={data.buttonDisable}>Войти</button>
                        <a className='modal-button-recovery' onClick={()=>{ data.updateDataRec(true)}}>Забыли?</a>
                        {data.showModalRec && <Recovery updateData={data.updateDataRec} setShowSuc={data.setShowSuc} showSuc={data.showSuc}></Recovery>}
                        <span></span>
                        <Link to={srcSignUpPage} onClick={() => {data.updateData(false)}}>Зарегистрироваться</Link>
                    </div>
                </StyleRoot>
            </Portal>
    )
}

export default SignIn