import { useState, useEffect } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(
    () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const handleFormSubmit = ({ name, number, id }) => {
    return contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
      ? alert(name + ' is already in contacts.')
      : setContacts(prev => [...prev, { name, number, id }]);
  };

  const normalizeContactName = filter.toLowerCase();

  const filteredContacesList = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeContactName)
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleFormSubmit={handleFormSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList
        contacts={filteredContacesList}
        removeContact={removeContact}
      />
    </Container>
  );
};

export default App;
