//import { Link } from 'react-router-dom';
import React from 'react'
import './mStyles/nStyles.css'
import { Heart, HouseDoor } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';
//import { withRouter } from 'react-router';

 function Navbar(props) {
    return (
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand d-inline" type="button" onClick={() => props.history.push("/")}> <img className="card-img-top lHeader " src="https://i.ibb.co/C2hkjTj/Lumarkgram.jpg" alt="Lumarkgram" border="0" /></a>
  <button class="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavDropdown">
  <input className="nvImput m-1 " type="text" placeholder="Search" aria-label="Search"></input>
    <ul class="navbar-nav float-right">
        <li className="nav-item active m-1  text-center">
            <HouseDoor className="iconClass" type="button" onClick={() => props.history.push("/")}/>         
        </li>
            <li className="nav-item a m-1 text-center">
            <Heart className="iconClass" type="button" onClick={() => props.history.push("/favpage")} />
            </li>
            <li className="nav-item m-1 text-center">
            <img src="https://i.ibb.co/cCfsdbD/descarga.jpg" 
                            className="rounded-circle  userNav" alt="user" 
                                type="button" onClick={() => props.history.push("/userpage")}/>
            </li>
     
    </ul>
  </div>
</nav>
      
     

        
    );
}

export default withRouter(Navbar);