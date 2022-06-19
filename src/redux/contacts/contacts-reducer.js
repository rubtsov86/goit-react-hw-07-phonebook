import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactSuccses,
  addContactError,
  deleteContactSuccses,
  fetchContactSuccses,
  setFilter,
} from './contacts-actions';
import { fetchContacts } from './contacts-operations';

const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContactSuccses]: (state, { payload }) => [...state, { ...payload }],

  [deleteContactSuccses]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [fetchContacts.rejected]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export const contactsReduser = combineReducers({
  items: itemReducer,
  error,
  filter: filterReducer,
});
