import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getIsAuth } from './authAction';
import { registerUser } from '../../redux/auth/authOperation';

const setContactsToLs = token =>
  window.localStorage.setItem('token', JSON.stringify(token));

const isAuthReducer = createReducer(false, {
  [getIsAuth]: (_, { payload }) => payload,
});

const userReducer = createReducer(
  {
    token: null,
    user: { name: null, email: null, password: null },
  },
  {
    [registerUser.fulfilled]: (_, { payload }) => {
      const { token, ...userData } = payload;
      console.log(token);
      console.log(userData);
      setContactsToLs(token);
      return userData;
    },
    // [getIsAuth]: () => true,
  }
);

const isLoadingReducer = createReducer(false, {
  [registerUser.pending]: () => true,
  [registerUser.fulfilled]: () => false,
  [registerUser.rejected]: () => false,
  // [getIsAuth]: () => false,
});

const setErr = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [registerUser.rejected]: setErr,
  [registerUser.pending]: () => null,
  // [getIsAuth]: () => false,
});

const AuthReducer = combineReducers({
  isAuth: isAuthReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default AuthReducer;
