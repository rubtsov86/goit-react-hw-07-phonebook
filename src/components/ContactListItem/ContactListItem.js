import React from 'react';
import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={s.button}
        id={id}
        onClick={evt => dispatch(deleteContact(evt.currentTarget.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
