import { Component } from 'react';
import { PhoneBookForm } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  addContact = data => {
    const contact = { id: nanoid(), name: data.name, number: data.number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  checkDuplicateName = name =>
    this.state.contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

  onDeleteContact = id =>
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <PhoneBookForm
          addContact={this.addContact}
          checkDuplicateName={this.checkDuplicateName}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <PhoneBookList
          onDeleteContact={this.onDeleteContact}
          contactList={filteredContacts}
        />
      </div>
    );
  }
}
