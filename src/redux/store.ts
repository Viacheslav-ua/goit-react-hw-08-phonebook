import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import authReducer from "./auth/auth-slice";
import { AuthTypes } from "../types";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: persistReducer<AuthTypes>(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //.concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
