import React, { useState, useEffect, useCallback, Component } from 'react';
import success from '../img/signup-success.svg'

function SignUpSuccess (props) {
    function redirect(url){
        history.push(url)
    }
    function close(){
        redirect('/About')
    }
    return (
        <div className='b-signup'>
            <div className='b-signup-close' onClick={close}>
                <span></span>
            </div>
            <div className='b-signup-success'>
                <img className='b-signup-success-img' src={success}></img>
                <h1 className='b-signup-success-headline'>Успех!</h1>
                <h3 className='b-signup-success-description'>Вы успешно зарегистрировались, наши модераторы проверят ваши данные в течение 1 рабочего дня, и вы сможете начать пользоваться сервисом</h3>
            </div>
        </div>
    );
}

export default SignUpSuccess
