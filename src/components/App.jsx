import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
import Filter from "./Filter.jsx";

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const handleAddContact = (newContact) => {
  setContacts((prevContacts) => {
    const isNameExists = prevContacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${newContact.name} is already in contacts!`);
      return prevContacts;
    } else {
      return [...prevContacts, newContact];
    }
  });
};

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = (contactId) => {
  setContacts((prevContacts) => {
    const updatedContacts = prevContacts.filter(
      (contact) => contact.id !== contactId
    );
    return updatedContacts;
  });
};

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filter: PropTypes.string.isRequired,
// };
