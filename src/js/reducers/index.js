import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    console.log("From Reducer -- ", action);
    switch (action.type) {
        case ADD_ARTICLE: 
            console.log("Caught under a case !!");
            return {
                ...state,
                articles: [...state.articles, action.payload]
            };
        default:
            return state;
    }
};

export default rootReducer;