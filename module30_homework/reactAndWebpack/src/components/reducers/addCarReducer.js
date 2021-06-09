import { ADD_DATA_TO_STATE, ADD_DATA_TO_DB, ADD_DATA_SUCCESS, ADD_DATA_FAILURE } from "../actions/addCar"
import { addCar } from "../api/addCar"

const initialState = {
    data: [],
}

export const addCarReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_DATA_TO_STATE:
            // return { ...state, data: state.data.concat(action.payload)}
            return { ...state, data: [...state.data, action.payload] }
        case ADD_DATA_TO_DB:
            addCar({ ...state, data: [...state.data, action.payload] })
            // return { ...state, data: state.data.concat(action.payload)}
            return { ...state, data: [...state.data, action.payload], isLoading: true }
        default: return state
    }
}