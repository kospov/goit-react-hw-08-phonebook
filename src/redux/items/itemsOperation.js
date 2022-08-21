import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItemApi, addItemApi, removeItemApi } from '../../units/mockApi';

export const getItem = createAsyncThunk('getItem', async (param, thunkApi) => {
  try {
    const item = await getItemApi();
    return item;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const addItem = createAsyncThunk('addItem', async (item, thunkApi) => {
  try {
    const newItem = await addItemApi(item);
    return newItem;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const removeItem = createAsyncThunk(
  'removeItem',
  async (id, thunkApi) => {
    try {
      const item = await removeItemApi(id);
      return item;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
