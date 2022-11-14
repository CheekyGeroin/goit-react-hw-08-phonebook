import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getLoggedIn } from "redux/auth/authSelectors"

 export default function PrivateRoute({ component, redirectTo = '/' })  {
    const isLoggedIn = useSelector(getLoggedIn)
    return isLoggedIn ? component : <Navigate to={redirectTo}/> 
    
}
