import './Category.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Category({ categoryName }) {
  return (
    <div className="cat">
      <h3>
        <Link to={`/`}>{categoryName}</Link>
      </h3>
      <Link to="/products/1">Product</Link>
    </div>
  );
}

export default React.memo(Category);