import { getContactsThunk } from 'Redux/thunks.js';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import styles from './App.module.css';
import { Filter } from 'components/Filter/Filter.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
