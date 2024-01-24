import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    clearSearch(state) {
      state.query = '';
      state.results = [];
    },
    // Другие редукторы и действия
  },
});

export const { setSearchQuery, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
