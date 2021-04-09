import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { API } from '../../config';
import { SIGNIN, SignInAction, signInFail, signInSuccess, SIGNUP, SignUpAction, signUpFail, signUpSuccess } from '../actions/auth.action';

// 注册
function* handelSignUp ( action: SignUpAction ) {
  try {
    yield axios.post( `${ API }/signup`, action.payload );
    yield put( signUpSuccess() );
  } catch ( error ) {
    yield put( signUpFail( error ) );
  }
}
// 登录
function* handelSignIn ( action: SignInAction ) {
  try {
    let res = yield axios.post( `${ API }/signin`, action.payload );
    localStorage.setItem( 'jwt', JSON.stringify( res ) );
    yield put( signInSuccess() );
  } catch ( error ) {
    yield put( signInFail( error ) );
  }
}


export default function* authSaga () {
  // 注册
  yield takeEvery( SIGNUP, handelSignUp );
  // 登录
  yield takeEvery( SIGNIN, handelSignIn );
}
