import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const pantryAdapter = createEntityAdapter({
  sortComparer: (a, b) => Date.parse(a.expiry) < Date.parse(b.expiry),
});

export const pantrySlice = createSlice({
  name: 'pantry',
  initialState: pantryAdapter.getInitialState(),
  reducers: {
    increment: (state, action) => {
      pantryAdapter.updateOne({
        id: action.payload,
        changes: {
          qty: state.entites[action.payload] + 1
        }
      });
    },
    decrement: (state, action) => {
      if (state.entities[action.payload] > 1) {
        pantryAdapter.updateOne({
          id: action.payload,
          changes: {
            qty: state.entities[action.payload] - 1
          }
        });
      } else {
        pantryAdapter.removeOne(action.payload);
      }
    },
    addPantryItem: pantryAdapter.addOne,
    changeExpiry: (state, action) => {
      pantryAdapter.updateOne({
        id: action.payload.id,
        changes: {
          expiry: action.payload.expiry
        }
      });
    }
  }
});

export const { increment, decrement, addPantryItem, changeExpiry } = pantrySlice.actions;
export default pantrySlice.reducer;