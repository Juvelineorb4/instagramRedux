import React from 'react'
import { Trash } from 'react-bootstrap-icons';
function CardFav(props) {
    const {product} = props
    const {DeleteFav} = props
    const{key} = props
    return (
        <div className="col-12 col-sm-6 col-md-4 p-2" key={key}>
                            <div className="card cdHProduct bgCFP2" >
                                <div className="view overlay">
                                <img className="card-img-top imgP" 
                                src={product.Children[0].Imgs[0].Path} 
                                alt={product.Children[0].Imgs[0].Alt} />
                    
                            </div>
                        <hr className="hrStyle1"/>
                            <Trash className="iconClass2" type="button" onClick={DeleteFav} />

                             </div>
                    </div>
    )
}

export default CardFav
