import Register from "components/Register/Register"
import { Outlet } from "react-router-dom"

export default function RegisterPage() {
    return (
        <div>
            <Register />
            <Outlet/>
        </div>
    )
}