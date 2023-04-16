import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  const { onClick, label } = props;

  return (
    <button className="c-button" type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
