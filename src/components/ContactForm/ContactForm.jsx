import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'Redux/selector';
import { addContactThunk } from 'Redux/thunks';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactSelect = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const mapContact = { name: setName, number: setNumber };

  const handleChange = ({ target }) => {
    mapContact[target.name](target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isExsist = contactSelect.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Name already exsist!');
      return;
    }

    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.formContainer}>
      <form type="submit" onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        Number
        <label className={styles.label}>
          <input
            className={styles.input}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
