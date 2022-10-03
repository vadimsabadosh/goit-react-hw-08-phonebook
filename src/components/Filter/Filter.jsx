import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import styles from './Filter.module.css';

export default function Filter({ onChange, value }) {
  return (
    <div className={styles.wrapper}>
      <Input
        label="Find contacts by name"
        name="filter"
        onChange={onChange}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
