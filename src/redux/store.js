import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import filter from '../redux/filter/filterReducer';
import contacts from '../redux/items/itemsReduser';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  //   devTools: process.env.NODE_ENV !== 'production',
});
