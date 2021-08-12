import * as types from '../types';

const initialState = {
  loading: false,
  error: '',
  user: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        isLoggedIn: true,
      };
    case types.LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default userReducer;
