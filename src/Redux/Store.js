import { applyMiddleware, createStore } from "redux"
import { rootReducer } from './Reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from "../Sagas/root.saga"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()
const middleware =[thunk, sagaMiddleware]

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['auth']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleware));
    sagaMiddleware.run(rootsaga)
    return store;
}

const store = configureStore()

export let persistor = persistStore(store)

export default store;