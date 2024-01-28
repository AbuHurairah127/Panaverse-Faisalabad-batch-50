import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import serviceSlice from './slices/serviceSlice';

export const store = configureStore({
  reducer: {
   counterSlice: counterSlice,
   serviceSlice: serviceSlice
  }
})