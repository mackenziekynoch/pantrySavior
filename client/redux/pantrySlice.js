import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const pantryAdapter = createEntityAdapter({
  sortComparer: (a, b) => Date.parse(a.expiry) < Date.parse(b.expiry),
});

export const pantrySlice = createSlice({
  name: 'pantry',
  initialState: pantryAdapter.getInitialState(),
  reducers: {
    changeQty: (state, action) => {
      if (action.payload.qty > 0) {
        pantryAdapter.setOne(state, action);
      } else {
        pantryAdapter.removeOne(state, action.payload.id);
      }
    },
    addPantryItem: pantryAdapter.addOne,
    changeExpiry: pantryAdapter.setOne
  }
});

export const { changeQty, addPantryItem, changeExpiry } = pantrySlice.actions;
export default pantrySlice.reducer;