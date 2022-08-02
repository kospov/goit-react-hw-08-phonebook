import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  };

  handleSubmitClick = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  }

  reset = () => {
    return (
      this.setState({
        name: '',
        number: '',
      })
    )
  }

  render() {
    return (
      <>
        <form className={s.form}>
          <label className={s.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.formInput}
            value={this.state.name}
            onChange={this.handleChangeInput}
          />

          <label className={s.formLabel}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.formInput}
            value={this.state.number}
            onChange={this.handleChangeInput}
          />

          <button
            type="submit"
            className={s.formBtn}
            onClick={this.handleSubmitClick}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
