import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilter }) => {
  
  const handleFilter = e => {
    const inputValue = e.target.value
    onFilter(inputValue)
  }

    return (
      <label className={css.label}>
        Find contacts by name
        <input type="text" onChange={handleFilter} className={css.input} placeholder='Name' />
      </label>
    );
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };