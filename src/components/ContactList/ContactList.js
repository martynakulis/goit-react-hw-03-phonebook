import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, filterValue, deleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              {contact.name} : {contact.number}
              {'  '}
              <button
                id={contact.id}
                onClick={deleteContact}
                className={css.buttons}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
