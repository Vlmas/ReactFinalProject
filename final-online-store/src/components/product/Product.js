import './Product.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product({ product }) {
  const params = useParams();

  return (
    <div className="product">
      <img src={product.image} width="100" alt="" />
      <Link to={`/categories/${params.categoryName}/products/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <h3>{product.price}</h3>
    </div>
  );
}

export default React.memo(Product);