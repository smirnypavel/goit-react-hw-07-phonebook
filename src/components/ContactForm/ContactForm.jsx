import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { useState } from 'react';
import Notiflix from 'notiflix';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = contacts.items;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isContactExist = filter.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === phone
    );
    if (isContactExist) {
      Notiflix.Notify.failure(`${name} ${phone} is already in contacts`);
      setName('');
      setPhone('');
      return;
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          className={styles.input}
          placeholder="Enter name"
        />
      </label>
      <label className={styles.label}>
        <input
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          required
          className={styles.input}
          placeholder="Enter phone number"
        />
      </label>
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
