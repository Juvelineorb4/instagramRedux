
import { Route } from "react-router-dom";
import Routes from "../constants/routes";
import favPage from "../containers/favPage";

function HomeRoute() {
    return <Route path={Routes.FAV.path} component={favPage} />;
}

export default HomeRoute;