import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.filter__label}>Find contacts by name</label>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        title="Name may contain only letters"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
