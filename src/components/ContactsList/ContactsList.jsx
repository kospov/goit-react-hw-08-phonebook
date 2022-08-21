import { useSelector } from 'react-redux';
import ContactItem from '../ContactsItem/ContactsItem';
import { getContactsArr } from 'redux/items/itemsSelectors';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const contactsArr = useSelector(getContactsArr);

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
