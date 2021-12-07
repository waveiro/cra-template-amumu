import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

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
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
  }
});

export const { decrement, increment } = homeSlice.actions;

export const selectCount = (state: RootState) => state.home.value

export default homeSlice.reducer;
