import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return <div className="error">{message}</div>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
