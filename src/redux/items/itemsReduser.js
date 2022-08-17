import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './itemsAction.js';

const setContactsToLs = contacts =>
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
const getContactsFromLs = () =>
  JSON.parse(window.localStorage.getItem('contacts'));

const itemsReduser = createReducer(getContactsFromLs() || [], {
  [addItem]: (state, action) => {
    const contacts = [...state, action.payload];
    setContactsToLs(contacts);
    return contacts;
  },
  [removeItem]: (state, action) => {
    const contacts = state.filter(el => el.id !== action.payload);
    setContactsToLs(contacts);
    return contacts;
  },
});

export default itemsReduser;
