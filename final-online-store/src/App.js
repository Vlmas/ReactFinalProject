import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import Cart from './components/cart/Cart';
import { AuthProvider } from './contexts/AuthContext';
import { EndpointProvider } from './contexts/EndpointContext';
import About from './components/about/About';
import Guide from './components/guide/Guide';
import Login from './components/login/Login';
import Products from './components/products/Products';
import ProductDetails from './components/product-details/ProductDetails';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <main className="app">
      <AuthProvider>
        <EndpointProvider>
          <div className="content">
            <Header />

            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/categories" element={<Categories />}>
                  <Route path=":categoryName" element={<Products />} />
                </Route>

                <Route path="/categories/:categoryName/products/:productId" element={<ProductDetails />} />

                <Route path="/about" element={<About />} />

                <Route path="/guide" element={<Guide />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </EndpointProvider>
      </AuthProvider>
    </main>
  );
}

export default App;