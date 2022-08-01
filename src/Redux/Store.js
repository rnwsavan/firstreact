import { createStore } from "redux"
import { rootReducer } from './Reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const middleware =[thunk, sagaMiddleware]

export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(...middleware));

    return store;
}