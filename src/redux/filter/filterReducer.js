import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from './filterAction';

const filterReducer = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

export default filterReducer;
