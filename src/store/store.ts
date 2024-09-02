import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
