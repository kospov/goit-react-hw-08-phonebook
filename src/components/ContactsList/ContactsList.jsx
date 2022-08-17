import { useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.item);

  return (
    <ul className={s.list}>
      {contacts.map(el => {
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
