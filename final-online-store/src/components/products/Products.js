import './Products.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useBaseUrl } from '../../contexts/EndpointContext';
import Product from '../product/Product';
import Loading from '../loading/Loading';

function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = useBaseUrl();

  const getProducts = useCallback(async () => {
    return await axios.get(`${url}/products/category/${params.categoryName}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }, [params.categoryName]);

  useEffect(() => {
    const result = getProducts();
    result.then((data) => {
      setProducts(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    }
  }, [params.categoryName]);

  return (
    <div className="products">
      {
        (loading)
        ? <Loading />
        : products.map((product) => {
          return (
            <Product key={product.id} product={product} />
          );
        })
      }
    </div>
  );
}

export default React.memo(Products);