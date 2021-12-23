import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useBaseUrl } from '../../contexts/EndpointContext';
import axios from 'axios';
import './Categories.css';
import Loading from '../loading/Loading';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = useBaseUrl();

  const getCategories = useCallback(async () => {
    return await axios.get(`${url}/products/categories`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const result = getCategories();
    result.then((data) => {
      setCategories(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    }
  }, [getCategories]);

  return (
    <div className="cats">
      <h2>Categories</h2>
      {(loading)
        ? <Loading />
        : categories.map((category, index) => {
          return (
            <div key={index}>
              <Link to={`/categories/${category}`}>
                <h2>{category}</h2>
              </Link>
            </div>
          );
        })
      }
      <Outlet />
    </div>
  );
}

export default Categories;