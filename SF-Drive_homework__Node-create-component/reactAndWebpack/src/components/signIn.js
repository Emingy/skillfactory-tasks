import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Portal from './portal';


import Close from '../img/module-close.svg';
import SignInPic from '../img/undraw_sign_in.svg';

import '../styles/signIn.css';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} `;

const SignUp = (data) => {
    return(
            <Portal>
                <FadeIn>
                    <div className='modal'>
                        <img src={Close} className='modal-close' onClick={() => {data.updateData(false)}}></img>
                        <img src={SignInPic} className='modal-pic'></img>
                        <h2>Авторизация</h2>
                        <input type='text' placeholder='Электронная почта' className='modal-input-login'></input>
                        <input type='password' placeholder='Пароль' className='modal-input-pass'></input>
                        <button className='modal-button-signIn disable'>Войти</button>
                        <span></span>
                        <a href='#'>Зарегистрироваться</a>
                    </div>
                </FadeIn>
            </Portal>
    )
}

export default SignUp