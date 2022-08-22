import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addItem } from 'redux/items/itemsOperation';
// import { getItems, getIsLoading } from 'redux/items/itemsSelectors';
import { registerUser } from '../../redux/auth/authOperation';
import s from './RegisterForm.module.css';

const ReristerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const items = useSelector(getItems);
  //   const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    //   const id = nanoid();

    //   items.find(el => el.name.toLowerCase() === name.toLowerCase())
    //     ? alert(name + ' is already in contacts.')
    //     : dispatch(addItem({ name, number, id }));

    console.log({ name, email, password });

    dispatch(registerUser({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Register Form</h1>
      <form className={s.form} onSubmit={handleSubmitClick}>
        <label className={s.formLabel}>Name</label>
        <input
          type="text"
          name="name"
          required
          className={s.formInput}
          value={name}
          onChange={handleChangeInput}
        />

        <label className={s.formLabel}>Email</label>
        <input
          type="email"
          name="email"
          required
          className={s.formInput}
          value={email}
          onChange={handleChangeInput}
        />

        <label className={s.formLabel}>Password</label>
        <input
          type="text"
          name="password"
          required
          className={s.formInput}
          value={password}
          onChange={handleChangeInput}
        />

        <button type="submit" className={s.formBtn}>
          Registrate
        </button>
      </form>
    </>
  );
};

export default ReristerForm;
