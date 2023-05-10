import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ onFilter }) => {
  return (
    <div className={s.filterBox}>
      <label className={s.filterText}>Find contacts by name</label>
      <input
        className={s.filterInput}
        type="text"
        onChange={event => {
          onFilter(event.currentTarget.value);
        }}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};
export default Filter;
