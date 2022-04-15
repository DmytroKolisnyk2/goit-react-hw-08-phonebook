import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contacts } from "./contacts/contacts-reducers";
import { auth } from "./auth/auth-reducers";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "dk2-phonebook",
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({ contacts, auth: persistReducer(persistConfig, auth) });

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);