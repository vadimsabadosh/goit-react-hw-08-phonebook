import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notify.module.css';

export default function Notify({ message }) {
  return <div className={styles.notify}>{message}</div>;
}

Notify.propTypes = {
  message: PropTypes.string.isRequired,
};
