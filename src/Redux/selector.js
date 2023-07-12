import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
