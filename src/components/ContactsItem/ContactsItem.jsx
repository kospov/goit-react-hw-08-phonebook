import s from './ContactsItem.module.css';

const ContactItem = ({ name, id, number }) => {
  return (
    <li htmlFor={id} className={s.item}>
      <p className={s.name}>
        {name}
        <span>: </span>
        <span className={s.phone}>{number}</span>
      </p>
    </li>
  );
};

export default ContactItem;
