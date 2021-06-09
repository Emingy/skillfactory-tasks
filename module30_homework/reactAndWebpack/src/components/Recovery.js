import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import { fadeInDownBig } from 'react-animations';
import Portal from './portal';
import {Link} from 'react-router-dom';

import Close from '../img/module-close.svg';
import RecoveryPic from '../img/undraw_recovery.svg';
import SuccessPic from '../img/undraw_success.svg';

import '../styles/recovery.css';


const srcSignUpPage = '../signUp/stepone'
const styles = {
    fadeInDownBig: {
      animation: 'x 0.8s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
}

const Recovery = (data) => {
    return(
            <Portal>
                <StyleRoot>
                    {data.showSuc ? <Success updateData={data.updateData} setShowSuc={data.setShowSuc} showSuc={data.showSuc} /> : <RecoveryPass updateData={data.updateData} setShowSuc={data.setShowSuc} showSuc={data.showSuc}/>}
                </StyleRoot>
            </Portal>
    )
}
const Success = (data) => {
    return(
        <div className='modal-recovery' style={styles.fadeInDownBig}>
        <img src={Close} className='modal-close' onClick={() => {data.updateData(false); data.setShowSuc(false)}}></img>
            <img src={SuccessPic} className='modal-pic-success'></img>
            <h2>Проверьте почту</h2>
            <p>Мы отправили письмо на вашу почту, пройдите по ссылке, которую мы отправили и измените пароль.</p>
        </div>
    )
}
const RecoveryPass = (data) => {
    return(
        <div className='modal-recovery' style={styles.fadeInDownBig}>
            <img src={Close} className='modal-close' onClick={() => {data.updateData(false); data.setShowSuc(false)}}></img>
            <img src={RecoveryPic} className='modal-pic'></img>
            <h2>Восстановление пароля</h2>
            <p>Мы отправим ссылку для Восстановления пароля на вашу электронную почту</p>
            <input type='text' placeholder='Электронная почта' className='modal-input-login'></input>
            <button className='modal-button-signIn disable' onClick={()=> {data.setShowSuc(true)}}>Отправить</button>
        </div>
    )
}
export default Recovery