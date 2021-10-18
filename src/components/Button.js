import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, color }) => {
  return (
    <div className="class">
      <button className="btn" onClick={onClick} style={{backgroundColor: color}}>
        {' '}
        {text}{' '}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: 'Add',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
