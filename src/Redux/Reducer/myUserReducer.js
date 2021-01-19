import { LOG_IN, LOG_OUT, GET_PROFILE } from "../Action/actionTypes";

export const myUserReducer = (
  state = { userLog: JSON.parse(localStorage.getItem("userLog") || "{}") },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        userLog: action.payload,
      };
    case LOG_OUT:
      return {
        userLog: action.payload,
      };
    case GET_PROFILE:
      return {
        userLog: action.payload,
      };
    default:
      return state;
  }
};

export default myUserReducer;
