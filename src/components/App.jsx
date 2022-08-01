import { Component } from 'react';
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

  handleSubmitClick = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactName = form.elements.name.value;
    const contactPhone = form.elements.number.value;

    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: contactName, id: nanoid(), number: contactPhone },
      ],
    }));

    form.reset();
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',

          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmitClick={this.handleSubmitClick} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
