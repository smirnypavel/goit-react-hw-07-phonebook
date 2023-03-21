import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { TbTrash as TrashIcon } from 'react-icons/tb';
import styled from './ContactList.module.css';

const ContactList = () => {
  const contontacts = useSelector(getContacts);
  const Filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const visibleContacts = contontacts.filter(contact =>
    contact.name.toLowerCase().includes(Filter.toLowerCase())
  );

  return (
    <ul className={styled.ul}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={styled.li}>
          <>
            {name}
            <br />
            {number}
          </>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className={styled.button}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
