export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

// Thunk action creator
import { axiosInstance } from '../../api/axiosInstance';

import md5 from 'md5';
import { toast } from 'react-toastify';

export const fetchRoles = () => async (dispatch, getState) => {
  const { roles } = getState().client;
  
  if (roles && roles.length > 0) {
    return; // Already fetched
  }

  try {
    const response = await axiosInstance.get('/roles');
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error('Failed to fetch roles:', error);
  }
};

export const loginUser = (credentials, rememberMe, history) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/login', credentials);
    const { token, ...userData } = response.data;
    
    // Hash email for gravatar
    const emailHash = md5(userData.email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=mp`;
    userData.gravatar = gravatarUrl;
    
    // Save to Redux
    dispatch(setUser(userData));
    
    // Save token if requested
    if (rememberMe) {
      localStorage.setItem('token', token);
    }
    
    // Setup token for subsequent requests
    axiosInstance.defaults.headers.common['Authorization'] = token;
    
    toast.success('Logged in successfully!');
    
    // Redirect
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push('/');
    }
    
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || 'Login failed!');
    throw error;
  }
};
