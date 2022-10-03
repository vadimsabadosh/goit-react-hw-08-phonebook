import Loader from 'components/Loader';
import ContactForm from 'components/ContactForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';
import { getContacts } from 'redux/contacts/contactsSelectors';

function Contacts() {
  const data = useSelector(getContacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function onFilterInput(e) {
    setFilter(e.target.value);
  }

  function filterContacts() {
    return data.items.filter(item => item.name.toLowerCase().includes(filter));
  }

  if (data.loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="page">
      <h1>Phonebook</h1>
      <ContactForm contacts={data.items} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterInput} />
      {data.items && <ContactList contacts={filterContacts()} />}
    </div>
  );
}

export default Contacts;
