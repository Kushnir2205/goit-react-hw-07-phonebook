import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
// import { selectContacts, selectFilter } from 'Redux/selector';

import { deleteContactThunk } from 'Redux/thunks';
import { selectFilteredContact } from 'Redux/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);
  // const contactSelect = useSelector(selectContacts);

  // const contactFilter = useSelector(selectFilter);

  // const getFilterContact = () => {
  //   return contactSelect.filter(({ name }) =>
  //     name.toLowerCase().includes(contactFilter.toLocaleLowerCase())
  //   );
  // };
  // const filteredContacts = getFilterContact();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
