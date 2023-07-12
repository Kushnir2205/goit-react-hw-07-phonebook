import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from 'service/Api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addContacts(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
