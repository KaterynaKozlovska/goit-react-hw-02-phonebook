// import { useState } from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
import { ContactForm } from '../Form/Form';
import { ContactList } from '../List/List';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import React, { Component } from 'react';

class App extends Component. {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = formData => {
    this.addToContacts(formData);
  };

  addToContacts = contact => {
    const { contacts } = this.state;
    const normalizedName = contact.name.toLowerCase();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (isExist) {
      return alert(`${contact.name} is already in contacts`);
    }
    const contactsList = contacts.concat(contact);
    return this.setState({ contacts: contactsList });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <section className={css.section}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </section>
      </div>
    );
  }
}
export default App;
