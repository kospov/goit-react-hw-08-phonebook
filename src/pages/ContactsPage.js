import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsContacts } from '../redux/items/itemsSelectors';
import { getItem } from '../redux/items/itemsOperation';

import ContactForm from '../components/ContactForm/ContactForm.jsx';
import Filter from '../components/Filter/Filter.jsx';
import ContactsList from '../components/ContactsList/ContactsList.jsx';

const Conracts = () => {
  const dispatch = useDispatch();

  const isContacts = useSelector(getIsContacts);

  useEffect(() => {
    !isContacts && dispatch(getItem());
  }, [dispatch, isContacts]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Conracts;
