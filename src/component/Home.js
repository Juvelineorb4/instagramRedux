import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch, connect } from "react-redux";
import {
    getAllProducts,
    setFavoriteProducts,
    deleteFavoriteProducts,
    selectAllProducts,
    selectFavoriteProducts
} from "../reducer/productSlice";



function Home(props) {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    console.log(allProducts);

    useEffect( ()=>{
        function SearchProducts(){
       axios.get('https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063#')
         .then(res => {    
          dispatch(getAllProducts(res.data));

          
           })
         .catch(err => console.log(err)); 
           }
       SearchProducts();
   },[dispatch]);

const btnAgg = () =>{
    dispatch(setFavoriteProducts(allProducts[0]));
}

    return (
        <div>
            <button onClick={()=>btnAgg()}>agg primera product</button>
        </div>
    )
}

export default Home
