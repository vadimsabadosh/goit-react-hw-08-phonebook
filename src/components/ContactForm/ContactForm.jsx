import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import Button from 'components/Button';
import Input from 'components/Input';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeNumber(e) {
    setNumber(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (name && number) {
      dispatch(addContact({ name, number }));
      setNumber('');
      setName('');
    }
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <Input
        label="Name"
        name="name"
        onChange={onChangeName}
        value={name}
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <Input
        label="Number"
        name="number"
        type="tel"
        onChange={onChangeNumber}
        value={number}
        required
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
}
