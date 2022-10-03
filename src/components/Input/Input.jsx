import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

export default function Input({
  label,
  name,
  onChange,
  value,
  required = false,
  password,
  title,
  pattern,
}) {
  return (
    <div className={styles.block}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        type={password ? 'password' : 'text'}
        name={name}
        placeholder={`Type your ${name}`}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.input}
        title={title}
        pattern={pattern}
      />
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  password: PropTypes.bool,
  title: PropTypes.string,
  pattern: PropTypes.string,
};
