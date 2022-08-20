import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getItemRequest,
  getItemSuccess,
  getItemError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
} from './itemsAction.js';

const itemsReduser = createReducer([], {
  [getItemSuccess]: (_, { payload }) => payload,
  [addItemSuccess]: (state, { payload }) => [...state, payload],
  [removeItemSuccess]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [getItemRequest]: () => true,
  [getItemSuccess]: () => false,
  [getItemError]: () => false,
  [addItemRequest]: () => true,
  [addItemSuccess]: () => false,
  [addItemError]: () => false,
  [removeItemRequest]: () => true,
  [removeItemSuccess]: () => false,
  [removeItemError]: () => false,
});

const setErr = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [getItemError]: setErr,
  [getItemRequest]: () => null,
  [addItemError]: setErr,
  [addItemRequest]: () => null,
  [removeItemError]: setErr,
  [removeItemRequest]: () => null,
});

const contactReducer = combineReducers({
  items: itemsReduser,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactReducer;
