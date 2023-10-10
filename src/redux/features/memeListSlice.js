import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const memeSlice = createSlice({
  name: 'memeList',
  initialState,
  reducers: {
    addMeme: (state, action) => {
      state.push(action.payload.meme);
    },
    deleteMeme: (state, action) => {
      state.splice(action.payload.idx, 1);
    },
    default: (state) => {
      return state;
    },
  },
});

export const { addMeme, deleteMeme } = memeSlice.actions;

export default memeSlice.reducer;
