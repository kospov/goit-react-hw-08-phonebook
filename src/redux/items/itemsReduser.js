import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './itemsAction.js';

const itemsReduser = createReducer([], {
  [addItem]: (state, action) => [...state, action.payload],
  [removeItem]: (state, action) => state.filter(el => el.id !== action.payload),
});

export default itemsReduser;
