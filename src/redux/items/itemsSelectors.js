import { getFilter } from 'redux/filter/filterSelector';
import { createSelector } from '@reduxjs/toolkit';

export const getIsContacts = state => Boolean(state.contacts.items.length);

export const getItems = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getContactsArr = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const contactsArr =
      filter === ''
        ? items
        : items.filter(el =>
            el.name.toLowerCase().includes(filter.toLowerCase())
          );
    return contactsArr;
  }
);
