import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../containers/app";
import FavRoute from "./fav";
import UserRoute from "./user";
import HomeRoute from "./home";

function Routes(props) {
    
    return (
        <Router >
        <App {...props}>
               <UserRoute/>
               <FavRoute />
               <HomeRoute /> 
        </App>
    </Router>
    );
}
export default Routes;
