import { getCar as fetchCar } from '../api/getCar'

export const GET_CARD = 'GET_CARD';
export const GET_CARD_REQUEST = 'GET_CARD_REQUEST';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';
export const GET_CARD_FAILURE = 'GET_CARD_FAILURE';


export const getCardRequest = () => ({ type: GET_CARD_REQUEST });
export const getCardSuccess = data => ({ type: GET_CARD_SUCCESS, payload: data });
export const getCardFailure = error => ({ type: GET_CARD_FAILURE, payload: error });

export const getCard = () => {
    return dispatch => {
        dispatch(getCardRequest());

        return fetchCar().then(
            data => dispatch(getCardSuccess(data)),
            error => dispatch(getCardFailure(error))
        );
    };
};