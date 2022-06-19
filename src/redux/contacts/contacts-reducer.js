import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './contacts-actions';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, { ...payload }],

  [deleteContact.fulfilled]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const error = createReducer(null, {
  [addContact.rejected]: (_, { payload }) => payload,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,

  [addContact.pending]: (_, { payload }) => null,
  [fetchContacts.pending]: (_, { payload }) => null,
  [deleteContact.pending]: (_, { payload }) => null,
});

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export const contactsReduser = combineReducers({
  items: itemReducer,
  error,
  filter: filterReducer,
});
