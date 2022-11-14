import { useSelector } from "react-redux"
import { getLoggedIn } from "redux/auth/authSelectors"
import Navigation from 'components/Navigation/Navigation'
import UserMenu from "components/UserMenu/UserMenu"
import AuthNav from "components/AuthNav/AuthNav"
import { Header } from "./AppBar.styled"

export default function AppBar() {
    const isLoggedIn = useSelector(getLoggedIn)
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    )
}