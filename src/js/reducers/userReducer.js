import { GET_USERS } from "../constants/action-types";

const initialState = {
    users: []
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: 
            return state;
    }
};