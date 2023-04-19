import React from 'react';
import PropTypes from 'prop-types';
import css from './List.module.css';
// import css from '../buttons/IconBtn/IconBtn.module.css';
import { ReactComponent as DeleteIcon } from '../Icons/close.svg';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.btn__icon}
              aria-label="Delete contact"
              onClick={() => onDeleteContact(id)}
            >
              <DeleteIcon width="10" heigth="10" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
