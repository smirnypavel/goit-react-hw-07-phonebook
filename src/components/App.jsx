import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';

export function App() {
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
