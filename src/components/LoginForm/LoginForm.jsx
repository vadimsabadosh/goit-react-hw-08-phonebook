import Button from 'components/Button';
import Input from 'components/Input';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/authSelectors';
import Notify from 'components/Notify';

export default function LoginForm() {
  const { status, message } = useSelector(getAuthError);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    password: '',
    email: '',
  });

  const onChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(state));
  };
  return (
    <form onSubmit={onSubmit} className="form">
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
        required
        password
      />
      <Button type="submit">Log in</Button>
      {status && <Notify message={message} />}
    </form>
  );
}
