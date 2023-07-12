import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';

import { setFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        className={styles.input}
        placeholder="Find contact"
        onChange={event => dispatch(setFilter(event.target.value))}
      ></input>
    </div>
  );
};
