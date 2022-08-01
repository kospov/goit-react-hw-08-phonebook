import ContactItem from 'components/ContactsItem/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  return (
    <div className={s.list}>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(el => {
          return <ContactItem key={el.id} name={el.name} id={el.id} number={el.number} />;
        })}
      </ul>
    </div>
  );
};



export default ContactsList;
