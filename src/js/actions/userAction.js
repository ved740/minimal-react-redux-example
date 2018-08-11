import axios from "axios";
import { GET_USERS } from "../constants/action-types";

export const getUsers = () => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                console.log("Users --- ", users);
                dispatch({
                    type: GET_USERS,
                    payload: users
                });
            })
    };
}