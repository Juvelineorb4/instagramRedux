import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState.item,
  reducers: {

      getAllProducts: (state, action) =>{
    state.allProducts.push(...action.payload)
      }, 
     setFavProducts: (state, action) => {
        state.favProducts.push(action.payload)
      },
      deleteFavProducts: (state, action) => {
        state.favProducts.splice(action.payload,1)
    } 
  },

});
export const { getAllProducts, setFavProducts, deleteFavProducts  } = itemSlice.actions
export const selectAllProducts = state => state.item.allProducts;
export const selectFavProducts = state => state.item.favProducts;
export default itemSlice.reducer;