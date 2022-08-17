import { all, call, put, takeEvery } from 'redux-saga/effects'
import { ForgotAPI, googleLoginAPI, loginApi, logoutAPI, signupApi } from '../Comman/api/auth.api';
import *as ActionTypes from '../../src/Redux/ActionType'
import { EmailVerify, LoggedoutUser, LoggedUser } from '../Redux/Action/auth.action';
import { setAlert } from '../Redux/Action/alert.action';
import { history } from '../history';

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
      history.push("/")
      // console.log(user);

   }
   catch(e){
      yield put(setAlert({text:e.payload , color: 'error'}))
      // console.log(e);
   }
}

function* googleLogin(action){
   try{
      const user = yield call(googleLoginAPI,action.payload)
      yield put(setAlert({text:"Google SignIn Successfully" , color: 'success'}))
      yield put (LoggedUser(user))
      history.push("/")
   }
   catch(e){
      yield put(setAlert({text:e.payload , color: 'error'}))
   }
}

function* logout(action){
   try{
      const user = yield call(logoutAPI);
      yield put (LoggedoutUser())
      history.push("/Login")
      yield put(setAlert({text:user.payload, color: 'success'}))
   }
   catch(e){
      yield put(setAlert({text:e.payload , color: 'error'}))
   }
}

function* forgotPass(action){
   try{
      const user = yield call(ForgotAPI,action.payload)
      yield put(setAlert({text:user.payload , color: 'success'}))
      // yield put(EmailVerify(user));

   }
   catch(e){
      yield put(setAlert({text:e.payload , color: 'error'}))
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsaga() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);

  yield takeEvery(ActionTypes.LOGIN_FORM, loginForm);

  yield takeEvery(ActionTypes.LOGOUT_USER,logout);

  yield takeEvery(ActionTypes.GOOGLE_LOGIN,googleLogin);

  yield takeEvery(ActionTypes.FORGOT_PASSWORD,forgotPass);
}

export function* authSaga () {
    yield all ([watchsaga()])
};