import React from 'react';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

function App() {
  const error = useSelector(contactsSelectors.getError);

  return (
    <div
      style={{
        fontSize: 40,
        paddingLeft: 20,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook />

      <h2>Contacts</h2>
      <Filter />
      {error ? <h2>{error}, please try latter</h2> : <ContactList />}
    </div>
  );
}

export default App;
