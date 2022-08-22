import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import filter from '../redux/filter/filterReducer';
import contacts from '../redux/items/itemsReduser';
import auth from '../redux/auth/authReducer';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  //   devTools: process.env.NODE_ENV !== 'production',
});
