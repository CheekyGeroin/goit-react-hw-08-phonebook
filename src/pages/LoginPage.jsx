import Login from "components/Login/Login"
import { Outlet } from "react-router-dom"

export default function LoginPage()  {
    return (
        <div>
            <Login />
            <Outlet/>
        </div>
    )
}