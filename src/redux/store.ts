import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPersistConfig, contactsReducer),
    // auth: authReduser,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //.concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;