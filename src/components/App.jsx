import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  // const handleFormSubmit = ({ name, number, id }) => {
  //   return contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
  //     ? alert(name + ' is already in contacts.')
  //     : setContacts(prev => [...prev, { name, number, id }]);
  // };

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
