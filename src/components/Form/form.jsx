import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export const ContactForm = ({onAddContact}) => {
  const [contact, setContact] = useState({name: '', number: '',})

  const handleSubmit = e => {
    e.preventDefault();

    const name = contact.name;
    const number = contact.number;

    onAddContact({ name, number });

    setContact({name: '', number: '',})
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setContact((contact) => {
      return {...contact, [name]: value}
    });
  };


    return (
      <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //required
            value={contact.name}
            onChange={handleChange}
            className={css.input}
            placeholder='Name'
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //required
            value={contact.number}
            onChange={handleChange}
            className={css.input}
            placeholder='Number'
          />
        <button type="submit" className={css.button}>Add contact</button>
      </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}