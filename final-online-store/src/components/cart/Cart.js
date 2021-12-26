import { useSelector } from 'react-redux';
import './Cart.css';

function Cart() {
  const cart = useSelector((state) => state.user.cart);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => <p>{item.title}</p>)}
    </div>
  );
}

export default Cart;