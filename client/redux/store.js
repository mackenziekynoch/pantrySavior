import { configureStore } from '@reduxjs/toolkit';
import pantryReducer from '../pantry/redux/pantrySlice.js';

export default configureStore({
  reducer: {
    pantry: pantryReducer
  }
});