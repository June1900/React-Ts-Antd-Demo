
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export interface SignUpPayload {
  email: string,
  username: string,
  password: string;
}

export interface SignUpAction {
  type: typeof SIGNUP,
  payload: SignUpPayload;
}

export interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS,
}

export interface SignUpFailAction {
  type: typeof SIGNUP_FAIL,
  msg: string;
}

export const signUp = ( payload: SignUpPayload ): SignUpAction => ( {
  type: SIGNUP,
  payload
} );

export const signUpSuccess = (): SignUpSuccessAction => ( {
  type: SIGNUP_SUCCESS,
} );

export const signUpFail = ( msg: string ): SignUpFailAction => ( {
  type: SIGNUP_FAIL,
  msg
} );

export type AuthUnionType = SignUpAction | SignUpSuccessAction | SignUpFailAction;