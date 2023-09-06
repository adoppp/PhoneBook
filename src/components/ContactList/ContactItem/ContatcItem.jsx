import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.item}>
      <span>{contact.name}</span>
      <span> {contact.number}</span>
      <button onClick={() => onDeleteContact(contact.id)} className={css.button} >Delete</button>
    </li>
  );
};


ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};