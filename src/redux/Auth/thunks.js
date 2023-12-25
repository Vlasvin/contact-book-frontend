import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  currentUser,
  login,
  logout,
  registration,
  removeToken,
  setToken,
} from "Services/api";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const data = await registration(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (token === null) return;

    try {
      setToken(token);
      const userData = await currentUser();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (body, { rejectWithValue }) => {
    try {
      const data = await logout(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    dispatchConditionRejection: (_, __, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        removeToken();
      }
      return true;
    },
  }
);
