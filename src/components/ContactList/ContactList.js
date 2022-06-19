import ContactListItem from '../ContactListItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
