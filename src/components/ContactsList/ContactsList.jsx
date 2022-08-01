import ContactItem from 'components/ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
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
