import { getCars as fetchCars } from '../api/getCars'

export const SEARCH_CARS = 'SEARCH_CARS';

export const GET_CARS = 'GET_CARS';
export const GET_CARS_REQUEST = 'GET_CARS_REQUEST';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE';


export const searchCars = () => {
    return dispatch => {
        dispatch(getCarsRequest());

        return fetchCars().then(
            data => dispatch(getCarsSuccess(data)),
            error => dispatch(getCarsFailure(error))
        );
    };
};

export const getCarsRequest = () => ({ type: GET_CARS_REQUEST });
export const getCarsSuccess = data => ({ type: GET_CARS_SUCCESS, payload: data });
export const getCarsFailure = error => ({ type: GET_CARS_FAILURE, payload: error });

export const getCars = () => {
    return dispatch => {
        dispatch(getCarsRequest());

        return fetchCars().then(
            data => dispatch(getCarsSuccess(data)),
            error => dispatch(getCarsFailure(error))
        );
    };
};