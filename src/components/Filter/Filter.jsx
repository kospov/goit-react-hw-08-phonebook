import s from './Filter.module.css';

const Filter = ({filter, handleChange }) => {
  return (
    <>
      <label className={s.formLabel}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.formInput}
      />
    </>
  );
};

export default Filter;
