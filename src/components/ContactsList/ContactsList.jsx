import { useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const contacts =
    filter === ''
      ? items
      : items.filter(el =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        );

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
