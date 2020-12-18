import React, {useState} from 'react';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './iStyles/iStyles.css';
import { useSelector, useDispatch } from "react-redux";
import { Trash } from 'react-bootstrap-icons';
import {
    getAllProducts, setFavProducts, deleteFavProducts,
    selectAllProducts, selectFavProducts
} from "../reducers/itemSlice";


const FavPage = (props) => {
    const dispatch = useDispatch();
    const FavProducts = useSelector(selectFavProducts);
    //console.log(allProducts);

    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal)

    const getBack = () => {
        props.history.goBack('/favpage');
    } 

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
                        <div className="col-12 col-sm-6 col-md-4 p-2" key={product._id}>
                            <div className="card cdHProduct bgCFP2" >
                                <div className="view overlay">
                                <img className="card-img-top imgP" 
                                src={product.Children[0].Imgs[0].Path} 
                                alt={product.Children[0].Imgs[0].Alt} />
                    
                            </div>
                        <hr className="hrStyle1"/>
                            <Trash className="iconClass2" type="button" onClick={()=> deleteFavorite(index)} />

                             </div>
                    </div>
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