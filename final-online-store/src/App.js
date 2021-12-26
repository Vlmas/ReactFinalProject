import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import Cart from './components/cart/Cart';
import { useAuth } from './contexts/AuthContext';
import { EndpointProvider } from './contexts/EndpointContext';
import About from './components/about/About';
import Guide from './components/guide/Guide';
import Login from './components/login/Login';
import Products from './components/products/Products';
import ProductDetails from './components/product-details/ProductDetails';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile';

function App() {
  const isAuthed = useAuth();

  return (
    <main className="app">
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

              <Route path="/cart" element={
                <CheckForAuth isAuthed={isAuthed}>
                  <Cart />
                </CheckForAuth>
              } />

              <Route path="/login" element={<Login />} />

              <Route path="/profile" element={<Profile />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </EndpointProvider>
    </main>
  );
}

function CheckForAuth({ isAuthed, children }) {
  return ((isAuthed) ? children : <Navigate to="/login" replace />);
}

export default App;