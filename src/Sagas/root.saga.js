import { all } from "redux-saga/effects"
import { authSaga } from "./auth.saga"

export function * rootsaga (){
    yield all([authSaga()])
}