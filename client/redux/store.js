import { configureStore } from '@reduxjs/toolkit';
import pantryReducer from './pantrySlice.js';

export default configureStore({
  reducer: {
    pantry: pantryReducer
  }
});