'use client';

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features/rootReducer';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    rootReducer,
  },
});
