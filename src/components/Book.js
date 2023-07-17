import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(1)); // Assuming book ID is 1
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>
        By
        {author}
      </p>
      <Button name="Remove" onClick={handleRemoveBook} />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
};

export default Book;
