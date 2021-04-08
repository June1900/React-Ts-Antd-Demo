import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { API } from '../../config';
import { SIGNUP, SignUpAction, signUpFail, signUpSuccess } from '../actions/auth.action';

function* handelSignUp ( action: SignUpAction ) {
  try {
    yield axios.post( `${ API }/signup`, action.payload );
    yield put( signUpSuccess() );
  } catch ( error ) {
    yield put( signUpFail( error ) );
  }

}


export default function* authSaga () {
  yield takeEvery( SIGNUP, handelSignUp );
}