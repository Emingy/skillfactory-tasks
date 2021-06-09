import { addCar as queryAddCar } from '../api/addCar'
export const ADD_DATA_TO_STATE = 'ADD_DATA_TO_STATE';
export const ADD_DATA_TO_DB = 'ADD_DATA_TO_DB';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAILURE = 'ADD_DATA_FAILURE';

export const AddDataToState = data => ({type: ADD_DATA_TO_STATE,payload: data})
export const AddDataToDb = (data) => ({type: ADD_DATA_TO_DB,payload: data})