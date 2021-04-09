// 注册
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const RESET_SIGNUP = 'RESET_SIGNUP';

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

export interface ResetSignUpAction {
  type: typeof RESET_SIGNUP,
}

export const resetSignUp = (): ResetSignUpAction => ( {
  type: RESET_SIGNUP
} );

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


// 登录
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const RESET_SIGNIN = 'RESET_SIGNIN';

export interface SignInPayload {
  email: string,
  password: string;
}

export interface SignInAction {
  type: typeof SIGNIN,
  payload: SignInPayload;
}

export interface SignInSuccessAction {
  type: typeof SIGNIN_SUCCESS,
}

export interface SignInFailAction {
  type: typeof SIGNIN_FAIL,
  msg: string;
}

export interface ResetSignInAction {
  type: typeof RESET_SIGNIN,
}

export const resetSignIn = (): ResetSignInAction => ( {
  type: RESET_SIGNIN
} );

export const signIn = ( payload: SignInPayload ): SignInAction => ( {
  type: SIGNIN,
  payload
} );

export const signInSuccess = (): SignInSuccessAction => ( {
  type: SIGNIN_SUCCESS,
} );

export const signInFail = ( msg: string ): SignInFailAction => ( {
  type: SIGNIN_FAIL,
  msg
} );


export type AuthUnionType = SignUpAction
  | SignUpSuccessAction
  | SignUpFailAction
  | ResetSignUpAction
  | SignInAction
  | SignInSuccessAction
  | SignInFailAction
  | ResetSignInAction;