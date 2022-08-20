import { useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const contactsArr =
    filter === ''
      ? contacts
      : contacts.filter(el =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul className={s.list}>
      {contactsArr.map(el => {
        return (
          <ContactItem
            key={el.id}
            name={el.name}
            id={el.id}
            number={el.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
