import { AuthUnionType, RESET_SIGNIN, RESET_SIGNUP, SIGNIN, SIGNIN_FAIL, SIGNIN_SUCCESS, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/auth.action";

export interface AuthState {
  signUp: {
    loaded: boolean,
    success: boolean,
    msg: string;
  },
  signIn: {
    loaded: boolean,
    success: boolean,
    msg: string;
  },
}

const initState: AuthState = {
  signUp: {
    loaded: false,
    success: false,
    msg: ''
  },
  signIn: {
    loaded: false,
    success: false,
    msg: ''
  },
};

export default function authReducer ( state: AuthState = initState, action: AuthUnionType ) {
  switch ( action.type ) {
    case SIGNUP:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: false,
          msg: ''
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: true,
          msg: ''
        }
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: false,
          msg: action.msg
        }
      };
    case RESET_SIGNUP:
      return {
        ...state,
        signUp: {
          loaded: false,
          success: false,
          msg: ''
        }
      };
    case SIGNIN:
      return {
        ...state,
        signUp: {
          loaded: false,
          success: false,
          msg: ''
        }
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: true,
          msg: ''
        }
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        signUp: {
          loaded: true,
          success: false,
          msg: action.msg
        }
      };
    case RESET_SIGNIN:
      return {
        ...state,
        signUp: {
          loaded: false,
          success: false,
          msg: ''
        }
      };
    default:
      return state;
  }
}