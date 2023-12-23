import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, registration } from "Services/api";

export const registerThunk = createAsyncThunk("auth/register", (body) =>
  registration(body)
);
export const loginThunk = createAsyncThunk("auth/login", (body) => login(body));
