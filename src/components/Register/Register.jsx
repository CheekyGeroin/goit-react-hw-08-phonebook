import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Form, Label, Input, Button } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name,email,password)
    dispatch(register({name, email, password}));
    reset()
  };
  const handleChange = e => {
      const { name, value } = e.currentTarget;
      switch (name) {
          case 'name':
              setName(value)
              break;
          case 'email':
              setEmail(value)
              break;
          case 'password':
              setPassword(value)
              break;
          default:
              return;
      }
  };
  const reset = () => {
    setName('')
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" value={name} onChange={handleChange}/>
      </Label>
      <Label>
        Email
        <Input type="text" name="email" value={email} onChange={handleChange}/>
      </Label>
      <Label>
        Password
        <Input type="password" name="password" value={password} onChange={handleChange}/>
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default Register