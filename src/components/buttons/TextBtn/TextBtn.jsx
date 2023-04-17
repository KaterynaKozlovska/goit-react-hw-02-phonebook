import React from 'react';
import PropTypes from 'prop-types';
import css from './TextBtn.module.css';

const TextButton = ({ text, type, onClick, ...allyProps }) => (
  <button className={css.btn-text} type={type} onClick={onClick} {...allyProps}>
    {text}
  </button>
);

TextButton.defaultProps = {
  onClick: () => null,
  text: null,
};

TextButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default TextButton;
