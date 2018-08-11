import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = article => {
    console.log("From Action !!", article);
    return { 
        type: ADD_ARTICLE, 
        payload: article 
    }
};