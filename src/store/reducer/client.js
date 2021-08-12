import * as types from '../types';

const initialState = {
  loading: false,
  error: '',
  preference: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_FETCH_CLIENT_PREFERENCE:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_FETCH_CLIENT_PREFERENCE:
      return {
        ...state,
        loading: false,
        preference: action.preference,
      };
    case types.FAILED_FETCH_CLIENT_PREFERENCE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default clientReducer;
