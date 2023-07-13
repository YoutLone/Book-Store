import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title }) => (
  <div>
    <h3>{title}</h3>
    <Button name="Remove" />
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book tile',
};

export default Book;
