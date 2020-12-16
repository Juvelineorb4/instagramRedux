
import { Route } from "react-router-dom";
import Routes from "../constants/routes";
import indexHome from "../containers/indexHome";

function HomeRoute() {
    return <Route exact path={Routes.HOME.path} component={indexHome} />;
}

export default HomeRoute;