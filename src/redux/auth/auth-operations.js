import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.headers.common['Authorization'] = '';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ''
  }
}

export const registerUser = createAsyncThunk("user/register", (data, { rejectWithValue }) => {
  return axios.post('/users/signup', data)
    .then(({ data }) => {
      info({ text: `You have successfully enrolled`, delay: 700 });
      token.set(data.token)
      return data;
    })
    .catch((data) => rejectWithValue(data.response.data.message)
    )
})

export const logInUser = createAsyncThunk("user/login", (data, { rejectWithValue }) => {
  return axios.post('/users/login', data)
    .then(({ data }) => {
      info({ text: `You have successfully login`, delay: 700 });
      token.set(data.token)
      return data;
    })
    .catch((data) => rejectWithValue(data.message)
    )
})
export const logOutUser = createAsyncThunk("user/logout", (data, { rejectWithValue }) => {
  return axios.post('/users/logout', data)
    .then(() => {
      info({ text: `You have successfully logout`, delay: 700 });
      token.unset()
    })
    .catch((data) => rejectWithValue(data.message)
    )
})
export const getCurrentUser = createAsyncThunk("user/refresh", (_, { rejectWithValue, getState }) => {
  const { auth: { token: persistedToken } } = getState();
  if (!persistedToken) return rejectWithValue();
  token.set(persistedToken);
  return axios.get('/users/current')
    .then(({ data }) => {
      info({ text: `You have successfully connect`, delay: 700 });
      return data;
    })
    .catch(() => rejectWithValue()
    )
})
