import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim() !== '' && this.state.number.trim() !== '') {
      const newContact = {
        name: this.state.name,
        number: this.state.number,
        id: nanoid()
      };
      this.props.onAddContact(newContact);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ border: '1px solid #ccc', padding: '8px'}}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '10px'}}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="number" style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}>Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />

          <button type="submit" style={{ marginLeft: '20px', marginTop: '20px', display: 'block' }}>Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
