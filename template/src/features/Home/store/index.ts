import { createSlice } from '@reduxjs/toolkit';

export interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    noop: () => {
    },
  }
});

export const { noop } = homeSlice.actions;

export default homeSlice.reducer;
