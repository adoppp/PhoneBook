import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContatcItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact, filter }) => {

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const contactElem = filterContact.map(contact => <ContactItem
    key={contact.id}
    contact={contact}
    onDeleteContact={onDeleteContact}
  />);
  
  return (
    <ul className={css.list}>
      {contactElem}
    </ul>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
