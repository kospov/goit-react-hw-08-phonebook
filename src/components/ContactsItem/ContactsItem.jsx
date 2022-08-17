import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/items/itemsAction';
import s from './ContactsItem.module.css';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <li htmlFor={id} className={s.item}>
      <p className={s.name}>
        {name}
        <span>: </span>
        <span className={s.phone}>{number}</span>
      </p>
      <button
        id={id}
        type="button"
        className={s.btnDelete}
        onClick={() => dispatch(removeItem(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
