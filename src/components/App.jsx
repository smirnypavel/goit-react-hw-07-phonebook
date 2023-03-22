import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactSlice';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>

      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default App;
