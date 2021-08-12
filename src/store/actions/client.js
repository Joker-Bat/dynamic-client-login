import axios from 'axios';
import * as types from '../types';

const fetchClientPreferenceRequested = () => {
  return { type: types.REQUESTED_FETCH_CLIENT_PREFERENCE };
};

const fetchClientPreferenceSuccess = (payload) => {
  return {
    type: types.SUCCESS_FETCH_CLIENT_PREFERENCE,
    preference: payload,
  };
};

const fetchClientPreferenceFailed = (payload) => {
  return {
    type: types.FAILED_FETCH_CLIENT_PREFERENCE,
    message: payload,
  };
};

// Function to be called from clientside
export const fetchClientPreference = (clientId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchClientPreferenceRequested());
      const response = await axios.get(
        `http://localhost:8000/api/login/${clientId}`
      );
      dispatch(fetchClientPreferenceSuccess(response.data.data.preference));
    } catch (err) {
      dispatch(fetchClientPreferenceFailed(err.response.data.message));
    }
  };
};
