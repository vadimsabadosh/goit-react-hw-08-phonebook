import Button from 'components/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>Hi, {user.name}!</div>
      <Button onClick={onLogout} type="button">
        Logout
      </Button>
    </div>
  );
}
