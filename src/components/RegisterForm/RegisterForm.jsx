import Button from 'components/Button';
import Input from 'components/Input';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/authSelectors';
import Notify from 'components/Notify';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const [state, setState] = useState({
    password: '',
    email: '',
    name: '',
  });

  const onChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(signup(state));
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <Input
        label="Name"
        name="name"
        onChange={onChange}
        value={state.name}
        required
      />
      <Input
        label="Email"
        name="email"
        onChange={onChange}
        value={state.email}
        required
      />
      <Input
        label="Password"
        name="password"
        onChange={onChange}
        value={state.password}
        password
        required
      />
      <Button type="submit">Register</Button>
      {status && <Notify message={message} />}
    </form>
  );
}
