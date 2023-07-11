import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { selectContacts, selectFilter } from 'Redux/selector';
import { deleteContact } from 'Redux/createSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactSelect = useSelector(selectContacts);
  const contactFilter = useSelector(selectFilter);
  const getFilterContact = () => {
    return contactSelect.filter(({ name }) =>
      name.toLowerCase().includes(contactFilter.toLocaleLowerCase())
    );
  };
  const filteredContacts = getFilterContact();
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
