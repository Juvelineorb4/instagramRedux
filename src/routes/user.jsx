
import { Route } from "react-router-dom";
import Routes from "../constants/routes";
import userPage from "../containers/userPage";

function HomeRoute() {
    return <Route  path={Routes.USER.path} component={userPage} />;
}

export default HomeRoute;