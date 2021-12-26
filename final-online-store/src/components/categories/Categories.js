import './Categories.css';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useBaseUrl } from '../../contexts/EndpointContext';
import axios from 'axios';
import Loading from '../loading/Loading';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highlight, setHighlight] = useState('');
  const url = useBaseUrl();

  const getCategories = useCallback(async () => {
    return await axios.get(`${url}/products/categories`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const result = getCategories();
    result
    .then((data) => {
      setCategories([...data, 'smarthphones', 'sport', 'tourism', 'stationery']);
      setLoading(false);
    })
    .catch((err) => console.log(err));

    return () => {
      setLoading(true);
    }
  }, [getCategories]);

  return (
    <div className="cats">
      <Link to="/categories" className="link-decor">
        <h2 onClick={() => setHighlight('')} className="cats-title">Categories</h2>
      </Link>
      
      {(loading)
        ? <Loading />
        : <div className="cats-scroll">
            {categories.map((category, index) => {
              return (
                <div key={index}>
                  <Link className="link-decor capitalize" to={`/categories/${category}`}>
                    {(highlight === category) 
                      ? <h3 onClick={() => setHighlight(category)} className="highlighted">{category}</h3> 
                      : <h3 onClick={() => setHighlight(category)}>{category}</h3>
                    }
                  </Link>
                </div>
              );
            })}
          </div>
      }

      {(highlight === '') && <h2 className="cats-title">Select a category to view its products!</h2>}
      <Outlet />
    </div>
  );
}

export default Categories;