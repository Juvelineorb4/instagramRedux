import {React, useEffect} from 'react';
import axios from 'axios';
import './iStyles/iStyles.css';
import { useSelector, useDispatch, connect } from "react-redux";
import { getAllProducts, setFavProducts, deleteFavProducts,
        selectAllProducts, selectFavProducts} from "../reducers/itemSlice";

const FavPage = () => {
    const dispatch    = useDispatch();
    const FavProducts = useSelector(selectFavProducts);
    //console.log(allProducts);
    return (
        <div className="container">
                {FavProducts !== undefined? 
                FavProducts.map((product,index)=>{
                    return (
                        <div className="row d-flex justify-content-center m-2 border" key={product._id}>
                            <div className="col-6 p-3">
                                <img src={product.Children[0].Imgs[0].Path} alt={product.Children[0].Imgs[0].Alt}/>
                                
                            </div>
                        </div>
                    )
                })
                : <div></div>}
        </div>
    )
}



export default FavPage;