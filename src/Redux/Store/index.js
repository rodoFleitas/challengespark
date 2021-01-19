import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import myUserReducer from '../Reducer/myUserReducer'
import usersReducer from '../Reducer/usersReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        myuser: myUserReducer,
        users: usersReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
)
export default store;