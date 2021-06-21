const { SEARCH_CARS, GET_CARS_REQUEST, GET_CARS_SUCCESS, GET_CARS_FAILURE } = require("../actions/cars");

const DEFAULT_CARS_STATE = {
    items: [],
    isLoading: false,
};

export const carReducer = (state = DEFAULT_CARS_STATE, action) => {
    switch (action.type){
        case SEARCH_CARS:
            return DEFAULT_CARS_STATE;
        case GET_CARS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CARS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                items: action.payload,
            };
        case GET_CARS_FAILURE:
            return{
                ...state,
                isLoading: false,
            };
        default: return state;
    }
}