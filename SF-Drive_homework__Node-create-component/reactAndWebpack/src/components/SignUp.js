import React from 'react';

import '../styles/signUp.css';
function SignUp (props) {
    function showPass(el){
        var input = document.getElementById(el);
        var button = document.getElementById(el+'-button')
        if(input.getAttribute('type')== 'password'){
            button.classList.add('active');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Password')
        }else{
            button.classList.remove('active');
            input.setAttribute('type', 'password');
            input.setAttribute('placeholder', '•••••••••••••••••••')
        }
    }
    function validateForm () {
        var elements = document.querySelectorAll('input:not([type="button"]):not([type="checkbox"]):not([type="submit"])')
        var valid = true;
        for (let elem of elements) {
            if(elem.value.trim()==''){
                valid = false;
            }
            if(elem.getAttribute('type')=='email' && elem.value.trim()!=''){
                var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(reg.test(elem.value)==true){
                    elem.classList.remove('error');
                    var msg = document.getElementById('email-error')
                    msg.style.display = 'none'
                }else{
                    valid = false;
                    elem.classList.add('error');
                    var msg = document.getElementById('email-error')
                    msg.style.display = 'block'
                }
            }
            if(elem.getAttribute('id')=='pass'){
                var pass = elem.value
            }
            if(elem.getAttribute('id')=='repeatPass' && elem.value.trim()!=''){
                if(elem.value==pass){
                    elem.classList.remove('error');
                    document.getElementById('pass').classList.remove('error')
                    var msg = document.getElementById('pass-error')
                    msg.style.display = 'none'
                }else{
                    valid = false;
                    elem.classList.add('error');
                    document.getElementById('pass').classList.add('error')
                    var msg = document.getElementById('pass-error')
                    msg.style.display = 'block'
                }
            }
        }
        if(valid === true){
            var submit = document.getElementById('b-signup-submit')
            submit.removeAttribute('disable');
            submit.classList.add('active');
        }else{
            var submit = document.getElementById('b-signup-submit')
            submit.setAttribute('disable', true);
            submit.classList.remove('active');
        }
        console.log(valid)
    }
    return (
        <div className='b-signup'>
            <p className='b-signup-step'>Шаг 1 из 3</p>
            <h1 className='b-signup-headline'>Расскажите о себе</h1>
            <div id='error-form'>
                <p>Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
            </div>
            <div className='b-signup-block ma52'>
                <h3 className='b-signup-block-headline'>Информация о вас</h3>
                <div>
                    <p>ФИО</p>
                    <input type='text' placeholder='ФИО полностью' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Дата рождения</p>
                    <input type='date' placeholder='00.00.0000' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Электронная почта</p>
                    <div>
                        <input type='email' placeholder='mail@example.com' required onChange={validateForm}/>
                        <span id="email-error">Неправильный email</span>
                    </div>
                </div>
                <div>
                    <p>Телефон</p>
                    <input type='number' placeholder='+7 900 000-00-00' required onChange={validateForm}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Паспорт</h3>
                <div>
                    <p>Серия и номер</p>
                    <input type='number' placeholder='0000 000000' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Дата выдачи</p>
                    <input type='date' placeholder='00.00.0000' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Кем выдан</p>
                    <input type='text' placeholder='Название органа выдавшего паспорт' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Код подразделения</p>
                    <input type='number' placeholder='000-000'required onChange={validateForm}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Водительское удостоверение</h3>
                <div>
                    <p>Серия и номер</p>
                    <input type='number' placeholder='0000 000000' required onChange={validateForm}/>
                </div>
                <div>
                    <p>Дата выдачи</p>
                    <input type='date' placeholder='00.00.0000' required onChange={validateForm}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Пароль</h3>
                <div>
                    <p>Придумайте пароль</p>
                    <div className='b-signup-block-password'>
                        <input type='password' id='pass' placeholder='•••••••••••••••••••' required onChange={validateForm}/>
                        <input type="button" id='pass-button' onClick={() => showPass('pass')}/>
                    </div>
                </div>
                <div>
                    <p>Повторите пароль</p>
                <div>
                    <div className='b-signup-block-password'>
                        <input type='password' id='repeatPass' placeholder='•••••••••••••••••••' required onChange={validateForm}/>
                        <input type="button" id='repeatPass-button' onClick={() => showPass('repeatPass')}/>
                    </div>
                    <span id="pass-error">Пароли не совпадают</span>
                </div>
                </div>
            </div>
            <div className='b-signup-submit'>
                <input id='b-signup-submit' type='submit' value='Продолжить' disabled/>
            </div>
        </div>
    );
}

export default SignUp