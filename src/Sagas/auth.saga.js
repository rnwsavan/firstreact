import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupApi } from '../Comman/api/auth.api';
import *as ActionTypes from '../redux/action/ActionTypes'

function* fetchUser(action) {
   try {
      const user = yield call(signupApi(), action.payload);
      yield put({type: ActionTypes.EMAIL_VARIFICATION , user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}



function* watchauth() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);
}




export function* authsaga (){
   yield all([
      watchauth()
   ])
};