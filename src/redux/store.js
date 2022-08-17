import { configureStore } from '@reduxjs/toolkit';
import filter from '../redux/filter/filterReducer';
import items from '../redux/items/itemsReduser';

export const store = configureStore({
  reducer: {
    items,
    filter,
  },
  //   devTools: process.env.NODE_ENV !== 'production',
});
