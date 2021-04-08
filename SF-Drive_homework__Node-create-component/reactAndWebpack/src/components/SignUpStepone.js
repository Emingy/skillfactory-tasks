import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import '../styles/signUp.css';

function SignUpStepOne (props) {

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
    function close(){
        redirect('/About')
    }
    var data = {

    }
    function check(){
        let boxes = document.querySelectorAll('input[type="radio"]')
        let status = false
        for(let box of boxes){
            if(box.checked==true){
                data = {
                    status: 'append',
                    data: {
                        planing: box.value
                    }
                }
                status = true
            }
        }
        if(status = true){
            let submit = document.getElementById('b-signup-submit')
            submit.style.height = '100px'
        }
    }
    function onSubmit(){
        Axios.post('http://localhost:8000/signUp', data)
            .catch(()=>{
                error()
            })
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                if(data.split(':')[1]=='200'){
                    redirect('/signUp/steptwo');
                }else{
                    error()
                }
            });
    }
    return (
        <div className='b-signup'>
            <div className='b-signup-close' onClick={close}>
                <span></span>
            </div>
            <div id='error-form'>
                <p id='error-form-text'>Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
            </div>
            <p className='b-signup-step'>Шаг 1 из 3</p>
            <h1 className='b-signup-headline'>Что вы планируете?</h1>
            <div className='b-signup-select'>
                <input id='b-signup-select-check__one' type='radio' name='check' value='Взять в аренду' onChange={check}/>
                <label for='b-signup-select-check__one'>
                    <span></span>
                    <p>Брать авто в аренду</p>
                </label>
                <input id='b-signup-select-check__two' type='radio' name='check' value='Сдать в аренду' onChange={check}/>
                <label for='b-signup-select-check__two'>
                    <span></span>
                    <p>Сдавать свой авто в аренду</p>
                </label>
            </div>
            <div id='b-signup-submit' className='b-signup-submit'>
                <input type='submit' value='Продолжить' onClick={onSubmit}/>
            </div>
        </div>
    );
}

export default SignUpStepOne