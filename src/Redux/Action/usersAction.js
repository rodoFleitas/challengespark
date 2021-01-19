import Axios from 'axios'
import {GET_USERS, EDIT_USER, DELETE_USER} from './actionTypes'

const url = "http://localhost:5000";

Axios.defaults.withCredentials = true;

export const getUsers = () => (dispatch) => {
    Axios.get(`${url}/users`).then(res => {
        const users = res.data
        dispatch({
            type: GET_USERS,
            payload: users
        })
    })
}

export const editUser = (id, values) => (dispatch) => {
    Axios.put(`${url}/users/edit/${id}`, values).then(res => {
        dispatch({
            type: EDIT_USER,
            payload: res.data
        })
    })
}

export const deleteUser = (id) => (dispatch) => {
    Axios.delete(`${url}/users/delete/${id}`).then(res => {
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    })
}