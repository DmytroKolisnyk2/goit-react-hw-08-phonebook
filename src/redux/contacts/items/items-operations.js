import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

axios.defaults.baseURL = "https://61fb905c87801d0017a2c5b6.mockapi.io";

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
  (id, { rejectWithValue }) =>
    axios
      .delete(`/contacts/${id}`)
      .then(({ data }) => {
        info({ text: `Contact successfully deleted`, delay: 700 });
        return data.id;
      })
      .catch(({ message }) => rejectWithValue(message))
);
