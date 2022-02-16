import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalAmount: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount++;
      state.changed = true;

      if (existingItem) {
        existingItem.totalAmount++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalAmount: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount--;
      state.changed = true;

      if (existingItem.totalAmount === 1) {
        state.items = state.items.filter((item) => existingItem.id !== item.id);
      } else {
        existingItem.totalAmount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
