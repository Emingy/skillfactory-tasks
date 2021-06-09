import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import '../styles/signUp.css';
function SignUpStepTwo (props) {
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [passportSerialNumber, setPassportSerialNumber] = useState('');
    const [passportDateIssue, setPassportDateIssue] = useState('');
    const [passportIssuedBy, setPassportIssuedBy] = useState('');
    const [passportCode, setPassportCode] = useState('');
    const [driveSerialNumber, setDriveSerialNumber] = useState('');
    const [driveDateIssue, setDriveDateIssue] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const history = useHistory();

    function onNameChange(e){
        setName(e.target.value);
        validateForm();
    }
    function onBirthdateChange(e){
        setBirthdate(e.target.value);
        validateForm();
    }
    function onEmailChange(e){
        setEmail(e.target.value);
        validateForm();
    }
    function onMobileChange(e){
        setMobile(e.target.value);
        validateForm();
    }
    function onPassportSerialNumberChange(e){
        setPassportSerialNumber(e.target.value);
        validateForm();
    }
    function onPassportDateIssueChange(e){
        setPassportDateIssue(e.target.value);
        validateForm();
    }
    function onPassportIssuedByChange(e){
        setPassportIssuedBy(e.target.value);
        validateForm();
    }
    function onPassportCodeChange(e){
        setPassportCode(e.target.value);
        validateForm();
    }
    function onDriveSerialNumberChange(e){
        setDriveSerialNumber(e.target.value);
        validateForm();
    }
    function onDriveDateIssueChange(e){
        setDriveDateIssue(e.target.value);
        validateForm();
    }
    function onPasswordChange(e){
        setPassword(e.target.value);
        validateForm();
    }
    function onRepeatPasswordChange(e){
        setRepeatPassword(e.target.value);
        validateForm();
    }



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
    function close(){
        redirect('/About')
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
            submit.style.height = '100px'
        }else{
            var submit = document.getElementById('b-signup-submit')
            submit.style.height = '0px'
        }
    }
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
            status: 'append',
            data:{
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
        }
        Axios.post('http://localhost:8000/signUp', data)
            .catch(()=>{
                error()
            })
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                // if(data.split(':')[1]=='200'){
                    redirect('/signUp/stepthree');
                // }else{
                //     error()
                // }
            });
    }
    return (
        <div className='b-signup'>
            <div className='b-signup-close' onClick={close}>
                <span></span>
            </div>
            <div className='b-signup-back' onClick={back}>
                <span></span>
            </div>
            <p className='b-signup-step'>Шаг 2 из 3</p>
            <h1 className='b-signup-headline'>Расскажите о себе</h1>
            <div id='error-form'>
                <p id='error-form-text'>Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
            </div>
            <div className='b-signup-block ma52'>
                <h3 className='b-signup-block-headline'>Информация о вас</h3>
                <div>
                    <p>ФИО</p>
                    <input type='text' placeholder='ФИО полностью' required value={name} onChange={onNameChange}/>
                </div>
                <div>
                    <p>Дата рождения</p>
                    <input type='date' placeholder='00.00.0000' required value={birthdate} onChange={onBirthdateChange}/>
                </div>
                <div>
                    <p>Электронная почта</p>
                    <div>
                        <input type='email' placeholder='mail@example.com' required value={email} onChange={onEmailChange}/>
                        <span id="email-error">Неправильный email</span>
                    </div>
                </div>
                <div>
                    <p>Телефон</p>
                    <input type='number' placeholder='+7 900 000-00-00' required value={mobile} onChange={onMobileChange}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Паспорт</h3>
                <div>
                    <p>Серия и номер</p>
                    <input type='number' placeholder='0000 000000' required value={passportSerialNumber} onChange={onPassportSerialNumberChange}/>
                </div>
                <div>
                    <p>Дата выдачи</p>
                    <input type='date' placeholder='00.00.0000' required value={passportDateIssue} onChange={onPassportDateIssueChange}/>
                </div>
                <div>
                    <p>Кем выдан</p>
                    <input type='text' placeholder='Название органа выдавшего паспорт' required value={passportIssuedBy} onChange={onPassportIssuedByChange}/>
                </div>
                <div>
                    <p>Код подразделения</p>
                    <input type='number' placeholder='000-000'required value={passportCode} onChange={onPassportCodeChange}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Водительское удостоверение</h3>
                <div>
                    <p>Серия и номер</p>
                    <input type='number' placeholder='0000 000000' required value={driveSerialNumber} onChange={onDriveSerialNumberChange}/>
                </div>
                <div>
                    <p>Дата выдачи</p>
                    <input type='date' placeholder='00.00.0000' required value={driveDateIssue} onChange={onDriveDateIssueChange}/>
                </div>
            </div>
            <div className='b-signup-block'>
                <h3 className='b-signup-block-headline'>Пароль</h3>
                <div>
                    <p>Придумайте пароль</p>
                    <div className='b-signup-block-password'>
                        <input type='password' id='pass' placeholder='•••••••••••••••••••' required value={password} onChange={onPasswordChange}/>
                        <input type="button" id='pass-button' onClick={() => showPass('pass')}/>
                    </div>
                </div>
                <div>
                    <p>Повторите пароль</p>
                <div>
                    <div className='b-signup-block-password'>
                        <input type='password' id='repeatPass' placeholder='•••••••••••••••••••' required value={repeatPassword} onChange={onRepeatPasswordChange}/>
                        <input type="button" id='repeatPass-button' onClick={() => showPass('repeatPass')}/>
                    </div>
                    <span id="pass-error">Пароли не совпадают</span>
                </div>
                </div>
            </div>
            <div id='b-signup-submit' className='b-signup-submit'>
                <input type='submit' value='Продолжить' onClick={onSubmit}/>
            </div>
        </div>
    );
}

export default SignUpStepTwo