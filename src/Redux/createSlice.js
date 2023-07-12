import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      });
  },
});

const filteredSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filteredSlice.actions;
export const contactReducer = contactSlice.reducer;
export const filterSlice = filteredSlice.reducer;
