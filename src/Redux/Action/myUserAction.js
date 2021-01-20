import Axios from "axios";
import { LOG_IN, LOG_OUT, GET_PROFILE } from "./actionTypes";

const url = "http://localhost:5000";

Axios.defaults.withCredentials = true;

export const logInUser = (values) => (dispatch) => {
  Axios.post(`${url}/users/login`, values, {
    withCredentials: true,
  }).then((res) => {
    console.log(res);
    if (res.data.message) {
      alert(res.data.message);
    }
    const userLog = res.data;
    if (userLog.admin) {
      dispatch({
        type: LOG_IN,
        payload: { userLog },
      });
      localStorage.setItem("userLog", JSON.stringify(userLog));
      return window.location.replace("/home");
    } else {
      alert('Usted no es Administrador')
      return window.location.replace("/");
    }
  });
};

export const logOutUser = () => (dispatch) => {
  Axios.get(`${url}/users/logout`).then((res) => {
    const userLog = {};
    dispatch({
      type: LOG_OUT,
      payload: { userLog },
    });
    localStorage.clear();
    return window.location.replace(`/`);
  });
};

export const userProfile = () => (dispatch) => {
  Axios.get(`${url}/users/profile`).then((res) => {
    const userLog = res.data.user;
    dispatch({
      type: GET_PROFILE,
      payload: userLog,
    });
    localStorage.setItem("userLog", JSON.stringify(userLog));
  });
};
