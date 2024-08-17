import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader, clearAuthHeader } from '../../services/api';
import { fetchCurrentUser } from '../User/operations';

/*
 * POST @ /auth/register
 * body: { name, email, password, }
 */
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password, }, thunkAPI) => {
    try {
      const res = await api.post('/auth/register', { name, email, password, });
      // After successful registration, add the token to the HTTP header
      // setAuthHeader(res.data.token);
      // After successful registration, login
      await thunkAPI.dispatch(logIn({email, password}));
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /auth/refresh
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const sid = thunkAPI.getState().auth.sid;
    const refreshToken = thunkAPI.getState().auth.refreshToken;

    if (!refreshToken || !sid) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('No Token');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(refreshToken);
      const res = await api.post('/auth/refresh', {sid:sid});
      setAuthHeader(res.accessToken);
      thunkAPI.dispatch(fetchCurrentUser());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
