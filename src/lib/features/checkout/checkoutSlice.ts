import { Entry } from "@/models/feed";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CheckoutState = {
  items: Entry[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: CheckoutState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Entry>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(
        (item) =>
          item.id.attributes["im:id"] === newItem?.id.attributes["im:id"]
      );
      if (itemIndex === -1) {
        state.items.push(newItem);
        state.totalQuantity += 1;
        state.totalPrice += parseFloat(newItem["im:price"]?.attributes?.amount);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.id.attributes["im:id"] === idToRemove
      );

      if (itemToRemove) {
        state.items = state.items.filter(
          (item) => item.id.attributes["im:id"] !== idToRemove
        );
        state.totalPrice -= parseFloat(
          itemToRemove["im:price"].attributes.amount
        );
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = checkoutSlice.actions;

export default checkoutSlice.reducer;
