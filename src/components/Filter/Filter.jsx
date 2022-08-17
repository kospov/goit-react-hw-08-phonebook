import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFilter } from 'redux/filter/filterAction';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

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

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;
