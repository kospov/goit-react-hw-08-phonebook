import PropTypes from 'prop-types';
import ContactItem from 'components/ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, removeContact}) => {
  return (
    <ul className={s.list}>
      {contacts.map(el => {
        return (
          <ContactItem
            key={el.id}
            name={el.name}
            id={el.id}
            number={el.number}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
}

export default ContactsList;
