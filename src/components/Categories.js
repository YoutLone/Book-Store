import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkstatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkstatus());
  };

  return (
    <div>
      <h2>Categories</h2>
      <button type="button" onClick={handleClick}>Check Status</button>
      <p>{category.status}</p>
    </div>
  );
};

export default Categories;
