import './Product.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product({ product }) {
  const params = useParams();

  return (
    <div className="product">
      <div className="img-wrapper">
        <img src={product.image} alt="" />
      </div>

      <div className="info-wrapper">
        <Link className="link-decor" to={`/categories/${params.categoryName}/products/${product.id}`}>
          <h4>{product.title}</h4>
        </Link>

        <div className="star-ratings">
          {[...Array(Math.round(product.rating.rate))].map((times, index) => {
            return <h3 key={index} className="stars">&#9733;</h3>;
          })} ({product.rating.count} reviews)
        </div>

        <div className="price-part">
          <h3>{product.price}$</h3>
          <p>| In instalments <strong>{Math.round(product.price / 3)}$</strong> x3</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);