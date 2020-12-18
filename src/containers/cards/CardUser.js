import React from 'react'

function CardUser(props) {
    const {product} = props;
    return (
        <div className="col-12 col-sm-6 col-md-4 p-2" key={product._id}>
                                    <div className="card cdHProduct bgCFP1" >
                        
                                        <div className="view overlay ">
                                            <img className="card-img-top imgP" 
                                                src={product.Children[0].Imgs[0].Path} 
                                                alt={product.Children[0].Imgs[0].Alt} />
                                        </div>
                                    </div>
                                </div>  
    )
}

export default CardUser
