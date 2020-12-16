import { combineReducers } from '@reduxjs/toolkit'
import productsSlice from './productSlice';

const rootReducer = combineReducers({
  products: productsSlice
});

export default rootReducer