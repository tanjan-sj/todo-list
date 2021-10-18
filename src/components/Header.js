import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
// import Button from '@material-ui/core'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        onClick={onAdd}
        color={showAdd ? 'lightcoral' : 'lightseagreen'}
        text={showAdd ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'ToDo List',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
