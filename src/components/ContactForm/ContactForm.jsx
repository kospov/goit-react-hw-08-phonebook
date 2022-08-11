import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({ handleFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    const id = nanoid();

    handleFormSubmit({ name, number, id });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmitClick}>
        <label className={s.formLabel}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.formInput}
          value={name}
          onChange={handleChangeInput}
        />

        <label className={s.formLabel}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.formInput}
          value={number}
          onChange={handleChangeInput}
        />

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func,
};

export default ContactForm;
