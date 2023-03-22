import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { TbTrash as TrashIcon } from 'react-icons/tb';
import styled from './ContactList.module.css';

import { Loader } from '../Loader/loader';

const ContactList = () => {
  const contontacts = useSelector(getContacts);
  const loader = contontacts.loading;
  const response = contontacts.items;
  const Filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const visibleContacts = response.filter(contact =>
    contact.name.toLowerCase().includes(Filter.toLowerCase())
  );
  return (
    <ul className={styled.ul}>
      {loader === 'loading' && <Loader />}
      {response.length > 0 &&
        visibleContacts.map(item => (
          <li key={item.id} className={styled.li}>
            <>
              {item.name}
              <br />
              {item.phone}
            </>
            <button
              type="button"
              onClick={() => handleDeleteContact(item.id)}
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
