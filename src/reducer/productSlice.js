import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
  reducers: {
      getAllProducts: (state, action)=>{
            state.allProducts.push(...action.payload)
      },
      setFavoriteProducts: (state, action)=>{
          state.favoriteProducts.push(action.payload);
      },
      deleteFavoriteProducts: (state, action)=>{
            state.favoriteProducts.splice(action.payload,1);
      }
  }
});

export const { getAllProducts, setFavoriteProducts, deleteFavoriteProducts } = productSlice.actions;

export const selectAllProducts = state => state.products.allProducts;
export const selectFavoriteProducts = state => state.products.favoriteProducts;



export default productSlice.reducer;