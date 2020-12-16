//import { Link } from 'react-router-dom';
import React from 'react'
import './mStyles/nStyles.css'
import { Heart, HouseDoor, People } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';

 function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
            <div className="navbar-brand nv-font" to='/'> Lumarkgram </div>
            {/* <h2 onClick={() => props.history.push("          ")}> Lumarkgram </h2> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <input className="nvImput ml-auto" type="text" placeholder="Search" aria-label="Search"></input>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">

                            <HouseDoor className="iconClass" type="button" onClick={() => props.history.push("/")} ></HouseDoor> 
                            <Heart className="iconClass" type="button" onClick={() => props.history.push("/favpage")}></Heart>
                            <People className="iconClass" type="button" onClick={() => props.history.push("/userpage")} />
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);