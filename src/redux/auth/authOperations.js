import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from 'services/authAPI';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      };
      const data = await registerUser(newUser);
      token.set(data.token);
      toast.success(`User with name ${newUser.name} has been created`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = {
        email: credentials.email,
        password: credentials.password,
      };
      const data = await loginUser(user);
      token.set(data.token);
      toast.success(`Welcome`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUser();
      token.unset();
      toast.success(`Goodbye`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong`);
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const dataUser = await getCurrentUser();
      console.log(dataUser);
      return dataUser;
    } catch (error) {
      toast.error(`Something went wrong`);
      rejectWithValue(error);
    }
  }
);
