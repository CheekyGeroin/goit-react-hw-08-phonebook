import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
      };
    },
    [register.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
    [login.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
      };
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
    [logout.fulfilled]: state => {
      return {
        ...state,
        user: {
          ...state.user,
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        error: null,
      };
    },
    [logout.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
    [refresh.pending]: state => {
      return {
        ...state,
        isRefreshing: true,
      };
    },
    [refresh.fulfilled]: (state, action) => {
      console.log(action);
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
        token: action.payload.token,
        isLoggedIn: true,
        isRefreshing: false,
        error: null,
      };
    },
    [refresh.rejected]: state => {
      return {
        ...state,
        isRefreshing: false,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
