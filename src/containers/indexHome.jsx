import {React} from 'react';
import './iStyles/iStyles.css';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, setFavProducts, deleteFavProducts,
        selectAllProducts, selectFavProducts} from "../reducers/itemSlice";

function IndexHome(props) {

    const dispatch          = useDispatch();
    const allProducts       = useSelector(selectAllProducts);
    const favoriteProducts  = useSelector(selectFavProducts);
    let  color = 'ibtn-dark';

    
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

const deleteFavorite = (id) =>{
    let indexF = undefined;
    favoriteProducts.every((product,index)=> {
       if ( product._id === id) { 
           indexF = index 
           return false;}
        return true;
    });
     indexF !== undefined ? dispatch(deleteFavProducts(indexF)):console.log(indexF)
} 
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
    
return (
<div className="container p-0 p-md-2" id="main"> 
       

        
{allProducts !== undefined? allProducts.map((product,index)=> {
    return (

        <div className="row" key={product._id}>
        
        <div className="col-12 col-md-8 p-4 ">
                    <div className="row m-0 p-0 d-flex justify-content-center " >
                    <div className="card promoting-card mlCard">
                        <div className="card-body d-flex flex-row mt-Card1" type="button" 
                            onClick={() => props.history.push("/userpage")}>
                                <img src='https://i.ibb.co/cCfsdbD/descarga.jpg'
                                alt= "user" 
                                className="rounded-circle mr-3 avatarHome Rcircle"/>
                                <div>                  
                                 <h6 className="card-title titleCard">{product.Name}</h6> 
                                 <p className="brandT"> {product.Brand}</p> 
                                </div>
                        </div>
                    <hr className="hrStyle"/>
                <div className="view overlay">
                     <img className="card-img-top" 
                     src={product.Children[0].Imgs[0].Path} 
                     alt={product.Children[0].Imgs[0].Alt} />
                     <a href="#!">
                         <div className="mask rgba-white-slight"></div>
                     </a>
                </div>
                <hr className="hrStyle1"/>
                 {changeColor(product._id)} 
                <Heart className= { " iconClass " + color} type="button" onClick={FavBtn(product)} />
                <div className="card-body">
                    <div className="collapse-content">
                        <p className="card-text"> {product.Description}, this product has been imported from an API products, as proof of this instagram module.</p>             
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    </div>
    )
}) :<div></div>
}
</div> 
)
}

export default IndexHome;