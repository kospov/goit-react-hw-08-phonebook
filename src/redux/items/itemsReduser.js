import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getItem, addItem, removeItem } from './itemsOperation.js';

const itemsReduser = createReducer([], {
  [getItem.fulfilled]: (_, { payload }) => payload,
  [addItem.fulfilled]: (state, { payload }) => [...state, payload],
  [removeItem.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [getItem.pending]: () => true,
  [getItem.fulfilled]: () => false,
  [getItem.rejected]: () => false,
  [addItem.pending]: () => true,
  [addItem.fulfilled]: () => false,
  [addItem.rejected]: () => false,
  [removeItem.pending]: () => true,
  [removeItem.fulfilled]: () => false,
  [removeItem.rejected]: () => false,
});

const setErr = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [getItem.rejected]: setErr,
  [getItem.pending]: () => null,
  [addItem.rejected]: setErr,
  [addItem.pending]: () => null,
  [removeItem.rejected]: setErr,
  [removeItem.pending]: () => null,
});

const contactReducer = combineReducers({
  items: itemsReduser,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactReducer;
