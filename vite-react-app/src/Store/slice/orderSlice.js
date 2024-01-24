import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    ordersMap: {},
  },
  reducers: {
    addOrder: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      state.ordersMap[id] = { id, name, price, quantity };
    },
    removeOrder: (state, action) => {
      const id = action.payload;
      delete state.ordersMap[id];
    },
    removeAllOrder: state => {
      state.ordersMap = {}
    },
  },
})

export const { addOrder, removeOrder,removeAllOrder } = orderSlice.actions;
export default orderSlice.reducer;