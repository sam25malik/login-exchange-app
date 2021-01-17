import axios from "axios";
import {toast} from "react-toastify";

export const setEmail = (data) => ({
    type: 'SET_EMAIL',
    data
});

export const setPassword = (data) => ({
    type: 'SET_PASSWORD',
    data
});

export const setError = () => ({
    type: 'SET_ERROR',
});

export function login() {
    return function (dispatch, getState) {
        let state = getState();
        return axios.get(`http://localhost:3000/login`,{
                params:{
                    email:state.data.email,
                    password:state.data.password
                },
                withCredentials: true
            }
        ).then(response => {
            toast('Signed In');
        }).catch(error => {
               toast('Some Error Occured');
               dispatch(setError());
          });  
    }
}

