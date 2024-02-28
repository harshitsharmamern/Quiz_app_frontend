import { createStore, applyMiddleware,compose } from 'redux';

import {thunk} from 'redux-thunk';


import todoReduceer from './Reducer/Reduceer';

const initialState = {
    todos:[]
};

const middleware= [thunk]
const store = createStore(
    todoReduceer,
    initialState,
    compose(
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
    )
    );


export default store;