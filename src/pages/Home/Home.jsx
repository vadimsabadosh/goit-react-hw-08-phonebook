import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h2>Phonebook Home Page</h2>
      <p>Log in before using the main functionality.</p>
      <Link to="/login" className={styles.link}>
        Log in
      </Link>
    </div>
  );
}

export default Home;
