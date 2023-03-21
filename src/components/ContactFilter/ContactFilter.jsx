import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';
import styles from './ContactFilter.module.css';

const ContactFilter = () => {
  const Filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = value => {
    dispatch(setFilter(value));
  };
  return (
    <input
      type="text"
      name="filter"
      value={Filter}
      onChange={({ target }) => handleChange(target.value)}
      placeholder="..to find"
      className={styles.input}
    />
  );
};

export default ContactFilter;
