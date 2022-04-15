import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getContact = createAsyncThunk("contacts/getContact", (_, { rejectWithValue }) =>
  axios
    .get("/contacts")
    .then(({ data }) => data)
    .catch(({ message }) => rejectWithValue(message))
);

export const addContact = createAsyncThunk("contacts/addContact", (data, { rejectWithValue }) =>
  axios
    .post("/contacts", data)
    .then(({ data }) => {
      info({ text: `Contact successfully added`, delay: 700 });
      return data;
    })
    .catch(({ message }) => rejectWithValue(message))
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  (id, { rejectWithValue }) => {
    return axios
      .delete(`/contacts/${id}`)
      .then(() => {
        info({ text: `Contact successfully deleted`, delay: 700 });
        return id;
      })
      .catch(({ message }) => rejectWithValue(message))
  }
);
