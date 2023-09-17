import React from "react";
import PropTypes from "prop-types";

const contactItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  gap: "10px",
};

function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li style={contactItemStyle}>
      <span>
        {name}: {number}
      </span>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactItem;

