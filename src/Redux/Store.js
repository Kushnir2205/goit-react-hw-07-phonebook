import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterSlice } from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice,
  },
});
