import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrderData = createAsyncThunk(
  'menu/fetchOrderData',
  async () => {
    const response = await axios.get('http://localhost:3006/order');
    return response.data;
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderData.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchOrderData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchOrderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
