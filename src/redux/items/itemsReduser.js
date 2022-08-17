import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './itemsAction.js';

const setContactsToLs = contacts =>
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
const getContactsFromLs = () =>
  JSON.parse(window.localStorage.getItem('contacts'));

const itemsReduser = createReducer(getContactsFromLs() || [], {
  [addItem]: (state, { payload }) => {
    const contact = [...state, payload];
    setContactsToLs(contact);
    return contact;
  },

  [removeItem]: (state, { payload }) => {
    const contacts = state.filter(el => el.id !== payload);
    setContactsToLs(contacts);
    return contacts;
  },
});

export default itemsReduser;
