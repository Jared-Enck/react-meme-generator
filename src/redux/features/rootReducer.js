import { combineReducers } from '@reduxjs/toolkit';
import memeListReducer from './memeListSlice';

export default combineReducers({ memeList: memeListReducer });
