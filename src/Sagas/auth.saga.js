import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupApi } from '../Comman/api/auth.api';
import *as ActionTypes from '../../src/Redux/ActionType'
import { EmailVerify } from '../Redux/Action/auth.action';
import { setAlert } from '../Redux/Action/alert.action';

function* fetchUser(action) {
   try {
      const user = yield call(signupApi, action.payload);
      
      yield put(setAlert({text:user.payload , color: 'success'}))
      yield put(EmailVerify(user));
   } catch (e) {
      console.log(e);
      yield put(setAlert({text:e.payload , color: 'error'}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsaga() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);
}

export function* authSaga () {
    yield all ([watchsaga()])
};