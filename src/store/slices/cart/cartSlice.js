import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    incrementItem: (state, action) => {
      const { title, price, img } = action.payload;
      const existingItem = state.value.find((item) => item.title === title);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ title, price, quantity: 1, img });
      }
    },
    decrementItem: (state, action) => {
      const { title } = action.payload;
      const existingItem = state.value.find((item) => item.title === title);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.value = state.value.filter((item) => item.title !== title);
        }
      }
    },
    incrementByAmount: (state, action) => {
      const { title, price, quantity, img } = action.payload;
      const existingItem = state.value.find((item) => item.title === title);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.value.push({ title, price, quantity, img });
      }
    },
  },
});

export const { incrementItem, decrementItem, incrementByAmount } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart.value;
