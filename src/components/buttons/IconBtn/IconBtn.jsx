import React from 'react';
import PropTypes from 'prop-types';
import css from './IconBtn.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    className={css.btn__icon}
    type="button"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
