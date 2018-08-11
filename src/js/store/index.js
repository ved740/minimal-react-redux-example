import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import { userReducer } from "../reducers/userReducer";

const combinedReducer = combineReducers({ rootReducer, userReducer });

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;