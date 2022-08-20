import { getItemApi, addItemApi, removeItemApi } from '../../units/mockApi';
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
} from './itemsAction';

export const getItem = () => dispatch => {
  dispatch(getItemRequest());

  getItemApi()
    .then(item => dispatch(getItemSuccess(item)))
    .catch(err => dispatch(getItemError(err.message)));
};

export const addItem = item => dispatch => {
  dispatch(addItemRequest());

  addItemApi(item)
    .then(newItem => dispatch(addItemSuccess(newItem)))
    .catch(err => dispatch(addItemError(err.message)));
};

export const removeItem = id => dispatch => {
  dispatch(removeItemRequest());

  removeItemApi(id)
    .then(item => dispatch(removeItemSuccess(item)))
    .catch(err => dispatch(removeItemError(err.message)));
};
