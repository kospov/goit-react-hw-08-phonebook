import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getItem } from '../redux/items/itemsOperation';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  const dispatch = useDispatch();

  const isContacts = useSelector(state => Boolean(state.contacts.items.length));

  useEffect(() => {
    !isContacts && dispatch(getItem());
  }, [dispatch, isContacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
