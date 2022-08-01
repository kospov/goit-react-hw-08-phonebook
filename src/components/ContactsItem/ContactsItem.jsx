import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
