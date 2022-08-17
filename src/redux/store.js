import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import filter from '../redux/filter/filterReducer';
import item from '../redux/items/itemsReduser';

const rootReducer = combineReducers({
  filter,
  item,
});

export const store = createStore(rootReducer, composeWithDevTools());
