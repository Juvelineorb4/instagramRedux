import {React, useEffect} from 'react';
import axios from 'axios';
import './iStyles/iStyles.css';
import { useSelector, useDispatch, connect } from "react-redux";
import { getAllProducts, setFavProducts, deleteFavProducts,
        selectAllProducts, selectFavProducts} from "../reducers/itemSlice";

function IndexHome(props) {

    const dispatch    = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    const favoriteProducts = useSelector(selectFavProducts);
    //console.log(allProducts);
    

    

   const FavoriteBtn = (product) =>{
    
    dispatch(setFavProducts(product));
}

const deleteFavorite = (id) =>{
    let indexF = undefined;
    favoriteProducts.map((product,index)=> {
        product._id === id ? indexF = index : indexF = undefined
        return indexF;
    });
    indexF !== undefined ? dispatch(deleteFavProducts(indexF)):console.log(indexF)
} 

    return (
        <div className="container">
                {allProducts !== undefined? 
                allProducts.map((product,index)=>{
                    return (
                        <div className="row d-flex justify-content-center m-2 border" key={product._id}>
                            <div className="col-6 p-3">
                                <img src={product.Children[0].Imgs[0].Path} alt={product.Children[0].Imgs[0].Alt}/>
                                <button className="btn btn-dark d-block" onClick={()=> FavoriteBtn(product)}>Agg FAV</button>
                                <button className="btn btn-dark d-block" onClick={()=> deleteFavorite(product._id)}>Eliminar</button>
                            </div>
                        </div>
                    )
                })
                : <div></div>}
        </div>
    )
}



export default IndexHome;
