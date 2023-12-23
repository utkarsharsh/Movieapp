import { configureStore } from '@reduxjs/toolkit'
import  homeSlice  from './home.js';

export const store = configureStore({
  reducer: {
    home:homeSlice
  },
});