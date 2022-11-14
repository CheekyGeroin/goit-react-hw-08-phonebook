import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Form, Label, Input, Button } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email,password)
    dispatch(login({email, password}))
    reset();
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="" name="email" value={email} onChange={handleChange} />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" value={password} onChange={handleChange} />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
export default Login;
