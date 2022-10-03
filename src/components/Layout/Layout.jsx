import UserMenu from 'components/UserMenu';
import useAuth from 'hooks/useAuth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  const isAuthenticated = useAuth();
  return (
    <>
      <nav className="nav-wrapper">
        <Container className="nav">
          <NavLink to="/" className="nav-title">
            Phonebook
          </NavLink>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <ul className="nav-list">
              <li>
                <NavLink to="/login" className="nav-item">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="nav-item">
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </Container>
      </nav>
      <Container>{children}</Container>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
