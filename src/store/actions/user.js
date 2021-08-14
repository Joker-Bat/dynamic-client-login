import axios from 'axios';
import * as types from '../types';

const loginUserRequested = () => {
  return {
    type: types.LOGIN_USER_REQUESTED,
  };
};

const loginUserSuccess = (payload) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    user: payload,
  };
};

const loginUserFailed = (payload) => {
  return {
    type: types.LOGIN_USER_FAILED,
    message: payload,
  };
};

export const loginUser = (username, password, clientId) => {
  return async (dispatch) => {
    try {
      dispatch(loginUserRequested());
      const response = await axios.post(`/api/login/${clientId}`, {
        username,
        password,
      });
      dispatch(loginUserSuccess(response.data.data.user));
    } catch (err) {
      dispatch(loginUserFailed(err.response.data.message));
    }
  };
};

export const logoutUser = () => {
  return { type: types.LOGOUT_USER };
};
