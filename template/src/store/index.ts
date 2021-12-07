import { configureStore } from '@reduxjs/toolkit';

import homeReducer from '../features/Home/store';
import { apiConfig as api } from '../api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
