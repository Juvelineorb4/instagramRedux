import React from 'react'
import './mStyles/nStyles.css'


export default function Footbar() {
    return (
      
<footer className="page-footer font-small unique-color-dark pt-4">
                <div className="container">
                     <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="btn btn-primary btn-rounded">Sign up!</a>
                        </li>
                    </ul>
                </div>

             <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://lumarketo.com/"> Lumarketo SPA</a>
                
            </div>

</footer>




    );
}