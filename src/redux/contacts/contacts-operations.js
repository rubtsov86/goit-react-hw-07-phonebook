import axios from 'axios';
import {
  addContactsRequest,
  addContactSuccses,
  addContactError,
  deleteContactsRequest,
  deleteContactSuccses,
  deleteContactError,
} from './contacts-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://62a758f5bedc4ca6d7c778ce.mockapi.io`;

export const addContact = contact => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccses(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccses(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
