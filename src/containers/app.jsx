import React, { useEffect } from "react";
import Navbar from '../mutuals/navbar';
import Footbar from '../mutuals/footbar';
import axios from 'axios';
import { useSelector, useDispatch} from "react-redux";
import { getAllProducts, selectAllProducts} from "../reducers/itemSlice";


function App(props) {
    const dispatch    = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    console.log(allProducts);

    useEffect(() => {
        function SearchProducts(){
        window.scrollTo(0, 0);
        axios.get('https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063#')
            .then(res => { dispatch(getAllProducts(res.data));
                    })
            .catch(err => console.log(err)); 
                    }
       SearchProducts();
   },[dispatch]);


    return (
        <main className="main">
            <Navbar  />
            <React.Fragment>{props.children}</React.Fragment>
           
            <Footbar/>
        </main>
    );
}

export default App;