import { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = e => {
    const { contacts } = this.state;
    const contact = e.currentTarget;
    this.setState(prev => ({
      contacts: contacts.filter(el => el.id !== contact.id)
    }));
  }

  handleFormSubmit = (formData) => {
    const { contacts } = this.state;
    return (
      contacts.find(el => el.name.toLowerCase() === formData.name.toLowerCase())
      ? alert(formData.name + ' is already in contacts.')
      : this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { name: formData.name, id: nanoid(), number: formData.number },
        ],
      }))
    )  
}

  render() {
    const { contacts, filter } = this.state;

    const normalizeContactName = filter.toLowerCase();

    const filteredContacesList = contacts.filter(el => el.name.toLowerCase().includes(normalizeContactName));

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactsList contacts={filteredContacesList} removeContact={ this.removeContact} />
      </Container>
    );
  }
}

export default App;
