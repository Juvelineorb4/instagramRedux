
import { combineReducers } from '@reduxjs/toolkit'
import itemSlice from './itemSlice';

const rootReducer = combineReducers({
    item: itemSlice
});

export default rootReducer