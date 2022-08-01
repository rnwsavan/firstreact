import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./Counter.reducer";
import { reducer_medicines } from "./medicines.reducer";


export const rootReducer = combineReducers({
    counter : counterReducer,
    medicine : reducer_medicines,
    auth : authReducer
})