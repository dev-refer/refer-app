import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import user from '../reducer/auth';


const middlewares = [thunk];

export const store = createStore(
    combineReducers({
        user,
    }),
    applyMiddleware(...middlewares)
)
