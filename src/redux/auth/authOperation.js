import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi } from '../../units/connectionsApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const postedUserData = registerUserApi(userData);
      return postedUserData;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
