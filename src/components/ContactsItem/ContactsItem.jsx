import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

const ContactItem = ({ name, id, number, removeContact }) => {
  return (
    <li htmlFor={id} className={s.item}>
      <p className={s.name}>
        {name}
        <span>: </span>
        <span className={s.phone}>{number}</span>
      </p>
      <button id={id} type='button' className={s.btnDelete} onClick={() => removeContact(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func,
};

export default ContactItem;
