import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsReducer } from "./contacts/concactSlice";
import { filtersReducer } from "./filterSlice";
import { authReducer } from "./auth/authSlice";


const persistConfig ={
key: 'auth',
storage,
whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer, 
    auth: persistReducer(persistConfig, authReducer)
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);




