import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/authOperations"
import { getUserEmail, getUserName } from "redux/auth/authSelectors"
import { Container, Text, Button } from "./UserMenu.styled"

export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(getUserName)
    const email = useSelector(getUserEmail)

    return (
        <Container>
            <Text>Welcome, {name} {email}</Text>
            <Button type="button" onClick={()=>{dispatch(logout())}}>Log Out</Button>
        </Container>
    )
}
