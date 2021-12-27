import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';

function Cart() {
  const { userId, name, username, wallet, cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const buyItem = (item) => {
    if(item.price > wallet) {
      alert('You don\'t have enough funds');
      return;
    }
    dispatch({ type: 'BUY_PRODUCT', payload: [item.id, item.price] });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: item.id });
  };

  return (
    <div className="cart">
      <h3 style={{textAlign: 'center'}}>Cart</h3>
      <div className="cart-img">
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-cart-outline-256.png" width="150" alt="" />
      </div>

      <div className="user-data">
        <h4>User ID: {userId}</h4>
        <h4>Name: {name} ({username})</h4>
        <h4>Your wallet balance: {wallet}$</h4>
      </div>

      {(!cart.length) ? <h3 style={{textAlign: 'center'}}>Your cart is empty at the moment</h3>
        : (
          <div className="cart-items-wrapper">
            <div className="cart-items">
              {cart.map((item) => {
                return (
                  <div className="cart-item">
                    <div className="cart-item-img">
                      <img src={item.image} alt="" />
                    </div>
                    <h4 style={{maxWidth: '30rem'}}>{item.title}</h4>
                    <h4><strong>{item.price}$</strong></h4>

                    <div className="cart-item-buttons">
                      <button style={{marginRight: '1.5rem'}} className="with-green" onClick={() => buyItem(item)}>Buy</button>
                      <button className="with-red" onClick={() => removeItem(item)}>Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Cart;