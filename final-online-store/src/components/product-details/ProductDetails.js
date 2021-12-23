import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useBaseUrl } from '../../contexts/EndpointContext';
import './ProductDetails.css';

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const url = useBaseUrl();

  const obtainProduct = async () => {
    return await axios.get(`${url}/products/${params.productId}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const result = obtainProduct();
    result.then((data) => {
      setProduct(data);
    })
  }, [params.productId]);

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} width="200" alt="" />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;