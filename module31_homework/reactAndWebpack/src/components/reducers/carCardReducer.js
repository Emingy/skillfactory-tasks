const { GET_CARD_REQUEST, GET_CARD_SUCCESS, GET_CARD_FAILURE } = require("../actions/carCard");

const DEFAULT_CARD_STATE = {
    items: [],
    isLoading: false,
};

export const carCardReducer = (state = DEFAULT_CARD_STATE, action) => {
    switch (action.type){
        case GET_CARD_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CARD_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                items: action.payload,
            };
        case GET_CARD_FAILURE:
            return{
                ...state,
                isLoading: false,
            };
        default: return state;
    }
}