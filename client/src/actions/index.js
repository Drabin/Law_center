import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from './types.js';

const API_URL = 'http://localhost:3030';

export function authError(error) {
  // returns error message
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signupUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${API_URL}/signup`, { email, password })
    .then((response) => {
      // if request is good indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save token to browser
      localStorage.setItem('token', response.data.token);
      // redirect to dashboard
      browserHistory.push('/dashboard');
    })
    .catch((response) => {
      dispatch(authError(response.data.error));
    });
  };
}

export function loginUser({ email, password }) {
  return (dispatch) => {
    // sending email/password to API server
    axios.post(`${API_URL}/login`, { email, password })
    .then((response) => {
      // if request is good indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save token to browser
      localStorage.setItem('token', response.data.token);
      // redirect to dashboard
      browserHistory.push('/dashboard');
    })
    .catch(() => {
      dispatch(authError('Bad login info'));
    });
  };
}

export function logoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

