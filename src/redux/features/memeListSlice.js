import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const memeListSlice = createSlice({
  name: 'memeList',
  initialState,
  reducers: {
    addMeme: (state, action) => {
      state.push(action.payload);
    },
    deleteMeme: (state, action) => {
      state.splice(action.payload, 1);
    },
    default: (state) => {
      return state;
    },
  },
});

export const { addMeme, deleteMeme } = memeListSlice.actions;

export default memeListSlice.reducer;
