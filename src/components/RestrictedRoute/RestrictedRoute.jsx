import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { authenticatedSelector } from "redux/selectors/selectors"

export const RestrictedRoute = ({ children, redirectTo = "/" }) =>  {
    const authenticated = useSelector(authenticatedSelector);
    return authenticated ? <Navigate to={redirectTo} replace /> : children;
}