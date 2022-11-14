import { Container, List, Item, Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/register">Sign Up</Link>
        </Item>
        <Item>
          <Link to="/login">Log In</Link>
        </Item>
      </List>
    </Container>
  );
}
