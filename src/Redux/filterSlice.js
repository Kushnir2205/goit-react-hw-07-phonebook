import { createSlice } from '@reduxjs/toolkit';
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
export const filterSlice = filteredSlice.reducer;
