import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";


function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDeleteContact={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
