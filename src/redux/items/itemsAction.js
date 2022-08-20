import { createAction } from '@reduxjs/toolkit';

export const getItemRequest = createAction('item/getItemRequest');
export const getItemSuccess = createAction('item/getItemSuccess');
export const getItemError = createAction('item/getItemError');

export const addItemRequest = createAction('item/addItemRequest');
export const addItemSuccess = createAction('item/addItemSuccess');
export const addItemError = createAction('item/addItemError');

export const removeItemRequest = createAction('item/removeItemRequest');
export const removeItemSuccess = createAction('item/removeItemSuccess');
export const removeItemError = createAction('item/removeItemError');
