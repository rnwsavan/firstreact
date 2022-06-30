import { createStore } from "redux"
import { rootReducer } from './Reducer'

export const configureStore = () => {
    let store = createStore(rootReducer);

    return store;
}