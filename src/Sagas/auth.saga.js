import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginApi, signupApi } from '../Comman/api/auth.api';
import *as ActionTypes from '../../src/Redux/ActionType'
import { EmailVerify, LoggedUser } from '../Redux/Action/auth.action';
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

function* loginForm(action){
   try{
      const user = yield call(loginApi, action.payload);
      yield put(setAlert({text:"Email Successfully" , color: 'success'}))
      yield put (LoggedUser(user))
      console.log(user);

   }
   catch(e){
      yield put(setAlert({text:e.payload , color: 'error'}))
      console.log(e);
   }
}

function* watchsaga() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);

  yield takeEvery(ActionTypes.LOGIN_FORM, loginForm);
}

export function* authSaga () {
    yield all ([watchsaga()])
};