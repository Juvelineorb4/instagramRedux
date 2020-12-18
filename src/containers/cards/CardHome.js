import React from 'react'
import { Heart} from 'react-bootstrap-icons';
function CardHome(props) {
    const {product} = props
    const {color} = props
    const {FavoriteBtn}=props
    const {Push}=props
    return (
        <div className="row" key={product._id}>
        <div className="col-12 col-md-8 p-4 ">
                    <div className="row m-0 p-0 d-flex justify-content-center " >
                    <div className="card promoting-card mlCard">
                        <div className="card-body d-flex flex-row mt-Card1" type="button" 
                            onClick={Push}>
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
                <Heart className= { " iconClass " + color} type="button" onClick={FavoriteBtn} />
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
}

export default CardHome
