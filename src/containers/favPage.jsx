import React from 'react';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './iStyles/iStyles.css';
import { useSelector, useDispatch } from "react-redux";

import {
    deleteFavProducts, selectFavProducts
} from "../reducers/itemSlice";
import CardFav from './cards/CardFav'


const FavPage = (props) => {
    const dispatch = useDispatch();
    const FavProducts = useSelector(selectFavProducts);
    //console.log(allProducts);

    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal)

  

    const deleteFavorite = (index) => {
        let indexF = index;
        indexF !== undefined ? dispatch(deleteFavProducts(indexF)) : console.log(indexF)

    } 
    return (
        <div className="container">
            <div className="row">
            {FavProducts !== undefined ?
                FavProducts.map((product, index) => {
                    return (
                        <CardFav
                        key = {product._id}
                        product = {product}
                        DeleteFav ={()=> deleteFavorite(index)}
                        />
                    //         <div className="row">


                    //             <Modal isOpen={modal}>
                    //               <ModalHeader toggle={toggle}><p >¿Desea eliminar este favorito? </p></ModalHeader>
                    //                  <ModalBody className="font-weight-bold">
                    //                     <div className="col-3">
                    //                         <img src={product.Children[0].Imgs[0].Path} 
                    //                             alt={product.Children[0].Imgs[0].Alt} className="jss1842" />
                    //                     </div>
                                
                    //                 </ModalBody>
                    //                 <ModalFooter>
                    //                     <Button onClick={toggle}>Regresar</Button>
                    //                     <Button onClick={() => deleteFavorite(product._id)}>Eliminar de favoritos</Button>
                    //                 </ModalFooter>

                    //              </Modal> 
                      
                    //  </div>
                      )
                    })
                    : <div></div>}
        </div>
    </div>
    )
}



export default FavPage;