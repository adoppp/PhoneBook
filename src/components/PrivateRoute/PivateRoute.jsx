import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { authenticatedSelector } from "redux/selectors/selectors"

export const PrivateRoute = ({ children, redirectTo = "/login" }) =>  {
    const authenticated = useSelector(authenticatedSelector);
    return authenticated ? children : <Navigate to={redirectTo} replace />;
}