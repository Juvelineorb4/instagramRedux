import {React} from 'react';
import './iStyles/iStyles.css';
import { useSelector, useDispatch } from "react-redux";
import { setFavProducts, deleteFavProducts,
        selectAllProducts, selectFavProducts} from "../reducers/itemSlice";
import CardHome from './cards/CardHome'

function IndexHome(props) {

    const dispatch          = useDispatch();
    const allProducts       = useSelector(selectAllProducts);
    const favoriteProducts  = useSelector(selectFavProducts);
    let  color = 'ibtn-dark';

    const changeColor = (id) => {
        color = "ibtn-dark"; 
       favoriteProducts.every((product, index) => {
         if (product._id === id) {
                color = "HeartFill";
                    return false;
               }
                return true;
          });
           
       }

    const FavBtn = (AggProduct) => (e) => {
    
    
      let indexF = undefined;
      favoriteProducts.every((product, index) => {
          if (product._id === AggProduct._id) {
              indexF = index
              return false;
          }
          return true;
      });
      if (indexF !== undefined){
          dispatch(deleteFavProducts(indexF));
          e.target.classList.remove('HeartFill');
          e.target.classList.add('ibtn-dark');
        }
    else {
        dispatch(setFavProducts(AggProduct));
          e.target.classList.remove('ibtn-dark');
          e.target.classList.add('HeartFill');
    }
}



    
return (
<div className="container p-0 p-md-2" id="main"> 
         
{allProducts !== undefined? allProducts.map((product,index)=> {
    changeColor(product._id)
    return (
       <CardHome
       key ={product._id}
       product={product}
       color = {color}
       FavoriteBtn = {FavBtn(product)}
       Push = {() => props.history.push("/userpage")}
       />
    )
}) :<div></div>
}
</div> 
)
}

export default IndexHome;