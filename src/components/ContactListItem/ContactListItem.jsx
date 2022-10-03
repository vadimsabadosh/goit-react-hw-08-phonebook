import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
import styles from './ContactListItem.module.css';

function ContactListItem({ number, name, id }) {
  const dispatch = useDispatch();
  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        onClick={() => onRemoveContact(id)}
        className={styles.delete}
        title="Delete contact from phonebook"
        aria-label="Delete contact from phonebook"
      ></button>
    </li>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
