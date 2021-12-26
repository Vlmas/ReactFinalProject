import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { useBaseUrl } from '../../contexts/EndpointContext';
import './ProductDetails.css';

const defaultProductState = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  rating: {rate: 0, count: 0},
};

function ProductDetails() {
  const isAuthed = useAuth();
  const params = useParams();
  const [product, setProduct] = useState(defaultProductState);
  const [display, setDisplay] = useState(false);
  const url = useBaseUrl();
  const dispatch = useDispatch();

  const obtainProduct = useCallback(async () => {
    return await axios.get(`${url}/products/${params.productId}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }, []);

  const addProductToCart = () => {
    if(!isAuthed) {
      alert('You are not logged in! Please log in to proceed');
      return;
    }
    dispatch({type: 'ADD_PRODUCT', payload: product});
    setDisplay(true);
    setTimeout(() => setDisplay(false), 3000);
  };

  useEffect(() => {
    const result = obtainProduct();
    result.then((data) => {
      setProduct(data);
    })
  }, []);

  return (
    <div className="product-details">
      <h3 className="details-path">Categories &#10140; {params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1)}</h3>

      <div className="details-main">
        <div className="details-img">
          <img src={product.image} alt="" />
        </div>

        <div className="details-brief">
          <div className="title-n-rating">
            <h3>{product.title}</h3>
            <div className="star-ratings">
              {[...Array(Math.round(product.rating.rate))].map((times, index) => {
                return <h3 key={index} className="stars">&#9733;</h3>;
              })} ({product.rating.count} reviews)
            </div>
          </div>

          <div className="product-specs">
            <div style={{marginBottom: '1.5rem'}} className="price-part">
              <h3>{product.price}$</h3>
              <p>| In instalments <strong>{Math.round(product.price / 3)}$</strong> x3</p>
            </div>
            
            <h3 style={{marginBottom: '1rem'}}>Specifications</h3>
            <div className="specs-specs">
              <p style={{maxWidth: '45rem'}}>{product.description}</p>
              <p>{product.rating.rate} rating, {product.rating.count} reviews</p>
            </div>
          </div>
          
          <button onClick={() => addProductToCart()}>Add to Cart</button>
          {(display) && <h5 className="display-message">Successfully added!</h5>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;