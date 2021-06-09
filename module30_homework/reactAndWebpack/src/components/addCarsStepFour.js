import React, { useState, useEffect } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone'

import "../styles/addCars.css"
import arrowBack from '../img/arrow-back-green.svg'
import cam from '../img/photo-dropzone-green.svg'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddDataToDb } from './actions/addCar';


class addCarsStepFour extends React.Component {
    constructor(props){
        super(props)
        this.onDrop = (data) => {
            const files = data.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
              }))
            this.setState({files});
        };
        this.state = {
            files: [],
        }
    }
    submit = event => {
        const data = {photosDoc:[...this.state.files]}
        const i = this.props.AddDataToDb(data)
        console.log(i)
        // localStorage.setItem('data', data);
        // this.props.history.push('/addCars/stepfour');
    }
    render(){
          
        const files = this.state.files.map( (file, i) => {
            return (
                <div className='b-main-addCars-photos-preview' key={i}>
                    <img src={file.preview}/>
                    <div>
                        <h6>{file.name.split('.')[0]}</h6>
                        <p>{Math.round(file.size/1024)>0 ? Math.round(file.size/1024)+' Мб' : file.size+' Кб'}, {file.name.split('.').pop().toUpperCase()}</p>
                    </div>
                </div>
            )
        })
        return (
            <main>
                <div className='b-main-addCars-back'>
                    <img src={arrowBack}/>
                    <p>Назад</p>
                </div>
                <p className='b-main-addCars-steps'>Шаг 4 из 4</p>
                <h2 className='b-main-addCars-headline'>Фото документов</h2>
                <p className='b-main-addCars-photos-headline'>СТС или ПТС автомобиля, полис ОСАГО,<br/> полис КАСКО (если есть)</p>
                    <Dropzone onDrop={this.onDrop} accept="image/*" >
                        {({getRootProps, getInputProps}) => (
                            <div className='b-main-addCars-photos'>
                                {files}
                                <div className='b-addCars-photo-dropdown'>
                                    <div {...getRootProps({id:'b-signup-dropzone-content'})}>
                                        <img src={cam}></img>
                                        <input {...getInputProps()} />
                                        <p id='dropzone-headline'>Перетащите или <a>выберите файл</a></p>
                                        <span>JPG или PNG, не более 30 мб</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                <div className='b-main-addCars-submit'>
                    <button onClick={this.submit}>Продолжить</button>
                </div>
            </main>
        );
    }
    
}
const mapStateToProps = state => {
    console.log(state)
    return state
}

const mapDispatchToProps = {
    AddDataToDb
}

export default withRouter(connect(null, mapDispatchToProps)(addCarsStepFour));
