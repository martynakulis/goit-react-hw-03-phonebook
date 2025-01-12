import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  handleInput = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };
  check = newContact => {
    const { contacts } = this.state;
    const isOnTheContactList = contacts.some(
      contact => contact.name === newContact.name
    );
    return isOnTheContactList;
  };

  addContact = newContact => {
    const isOnTheContactList = this.check(newContact);
    if (isOnTheContactList) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = e => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(contact => contact.id !== e.target.id);
    this.setState({
      contacts,
    });
  };

  componentDidMount() {
    const lsContacts = JSON.parse(localStorage.getItem('contact'));
    if (lsContacts) {
      this.setState({
        contacts: lsContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleInput={this.handleInput} value={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
