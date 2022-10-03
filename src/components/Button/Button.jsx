import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  children,
  variant = 'primary',
  onClick,
}) {
  const classname = cn(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
  });
  return (
    <button type={type} className={classname} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
