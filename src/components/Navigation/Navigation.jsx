import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { Nav, List, Item, Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <Nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</Item>
      </List>
    </Nav>
  );
};
export default Navigation;
