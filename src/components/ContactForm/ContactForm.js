import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  submitForm = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const id = nanoid();

    this.props.addContact({ id, ...this.state });
    this.reset();
    form.reset();
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (
      <>
        <form onSubmit={this.submitForm} className={css.form}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            id={nameInputId}
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={numberInputId}>Number</label>
          <input
            id={numberInputId}
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
