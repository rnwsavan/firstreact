import { applyMiddleware, createStore } from "redux"
import { rootReducer } from './Reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from "../Sagas/root.saga"

const sagaMiddleware = createSagaMiddleware()
const middleware =[thunk, sagaMiddleware]

export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(...middleware));
    sagaMiddleware.run(rootsaga)
    return store;
}

const store = configureStore()

export default store;