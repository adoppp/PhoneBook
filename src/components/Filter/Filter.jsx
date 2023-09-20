import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilter }) => {
  
  const handleFilter = e => {
    const inputValue = e.target.value
    onFilter(inputValue)
  }

    return <input type="text" onChange={handleFilter} className={css.input} placeholder='Name' />
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  };