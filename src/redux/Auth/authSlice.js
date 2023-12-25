import { createSlice } from "@reduxjs/toolkit";
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./thunks";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilled)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(currentUserThunk.pending, handlePending)
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(currentUserThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = "";
        state.user = null;
        state.isLoading = false;
        localStorage.clear();
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        handleRejected(state, action);
        state.token = "";
        localStorage.clear();
      });
  },
});

export const authReducer = authSlice.reducer;
