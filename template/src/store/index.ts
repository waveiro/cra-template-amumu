import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/Home/Counter.slice';

export const index = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
