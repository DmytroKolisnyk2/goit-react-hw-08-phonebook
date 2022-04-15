import { createReducer } from "@reduxjs/toolkit";
import { registerUser, logInUser, logOutUser, getCurrentUser } from "./auth-operations";
import { combineReducers } from "@reduxjs/toolkit";

export const error = createReducer(null, {
  [registerUser.rejected]: (_, { payload }) => payload,
  [logInUser.rejected]: (_, { payload }) => payload,
  [logOutUser.rejected]: (_, { payload }) => payload,
  [registerUser.pending]: () => '',
  [logInUser.pending]: () => '',
  [logOutUser.pending]: () => '',
});

const INITIAL_DATA = { 'name': '', 'email': '' };

export const user = createReducer(INITIAL_DATA, {
  [getCurrentUser.fulfilled]: (_, { payload }) => payload,
  [registerUser.fulfilled]: (_, { payload }) => payload.user,
  [logInUser.fulfilled]: (_, { payload }) => payload.user,
  [logOutUser.fulfilled]: () => INITIAL_DATA
});

export const token = createReducer(null, {
  [registerUser.fulfilled]: (_, { payload }) => payload.token,
  [logInUser.fulfilled]: (_, { payload }) => payload.token,
  [logOutUser.fulfilled]: () => null
});

export const loading = createReducer(false, {
  [registerUser.pending]: () => true,
  [logInUser.pending]: () => true,
  [registerUser.fulfilled]: () => false,
  [logInUser.fulfilled]: () => false,
  [registerUser.rejected]: () => false,
  [logInUser.rejected]: () => false,
});
const isAuthenticated = createReducer(false, {
  [registerUser.fulfilled]: () => true,
  [logInUser.fulfilled]: () => true,
  [registerUser.rejected]: () => false,
  [logInUser.rejected]: () => false,
  [logOutUser.fulfilled]: () => false,
  [getCurrentUser.fulfilled]: () => true,
  [getCurrentUser.rejected]: () => false,
});

export const auth = combineReducers({ user, isAuthenticated, token, error, loading })