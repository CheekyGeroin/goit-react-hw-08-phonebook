import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";
import { getLoggedIn } from "redux/auth/authSelectors";

 export default function PublicRoute({ component, restricted = false, redirectTo = '/' })  {
    const isLoggedIn = useSelector(getLoggedIn)
    const shouldRedirect = isLoggedIn && restricted;

    return shouldRedirect ? <Navigate to={redirectTo}/> : component
}
