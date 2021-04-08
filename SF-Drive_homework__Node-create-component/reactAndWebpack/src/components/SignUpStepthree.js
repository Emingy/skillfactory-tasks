import React, { useState, useEffect, useCallback, Component } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import '../styles/signUp.css';
import cam from '../img/photo-dropzone.svg'

function SignUpStepThree (props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      maxFiles: 1,
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
        let content = document.getElementById('b-signup-dropzone-content')
        content.style.display = 'none'
        let submit = document.getElementById('b-signup-submit')
        submit.style.height = '100px'
      }
    });
    const file = files.map(file => (
        file
    ));
    const thumbs = files.map(file => (
        file.preview
    ));

    const style = {
        background: `center / cover no-repeat url(${thumbs})`
    }
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
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
        redirect('/signUp/steptwo')
    }
    function close(){
        redirect('/About')
    }
    function onSubmit(){
        let data = {
            status:'upload',
            data:{
                file: file[0]
            }
        }
        Axios.post('http://localhost:8000/signUp', data)
            .catch(()=>{
                error()
            })
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                if(data.split(':')[1]=='200'){
                    redirect('/signUp/SignUpSuccess');
                }else{
                    error()
                }
            });
    }
    return (
        <div className='b-signup'>
            <div id='error-form'>
                <p id='error-form-text'>Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
            </div>
            <div className='b-signup-close' onClick={close}>
                <span></span>
            </div>
            <div className='b-signup-back' onClick={back}>
                <span></span>
            </div>
            <p className='b-signup-step'>Шаг 3 из 3</p>
            <h1 className='b-signup-headline'>Загрузите своё фото</h1>
            <h3 className='b-signup-description'>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h3>
                    <div {...getRootProps({ className: 'dropzone' })} style={style} className='b-signup-photo-dropdown'>
                        <div id='b-signup-dropzone-content'>
                            <img src={cam}></img>
                            <input {...getInputProps()} />
                            <p>Перетащите или <a>выберите файл</a></p>
                            <span>JPG или PNG, не более 30 мб</span>
                        </div>
                    </div>
                <div id='b-signup-submit' className='b-signup-submit'>
                <input type='submit' value='Зарегистрироваться' onClick={onSubmit}/>
            </div>
        </div>
    );
}

export default SignUpStepThree
