import Home from "components/Home/Home"
import { Outlet } from "react-router-dom"
import { Container } from "./HomePage.styled"


const HomePage = () => {
  return (
    <Container>
      <Home />
    <Outlet/>
    </Container>
  )

}
    
export default HomePage