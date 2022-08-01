import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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

  render() {
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
        <Phonebook handleSubmitClick={this.handleSubmitClick} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
