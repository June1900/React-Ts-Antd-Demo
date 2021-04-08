import { AuthUnionType, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/auth.action";

export interface AuthState {
  signUp: {
    loaded: boolean,
    success: boolean,
    msg: string;
  };
}

const initState: AuthState = {
  signUp: {
    loaded: false,
    success: false,
    msg: ''
  }
};

export default function authReducer ( state :AuthState = initState, action: AuthUnionType ) {
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
    default:
      return state;
  }
}