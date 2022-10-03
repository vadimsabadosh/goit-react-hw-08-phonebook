import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList({ contacts }) {
  if (!contacts.length) return null;

  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, number, name }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
