import './Guide.css';
import buy from '../../assets/buy.png';
import actions from '../../assets/history.png';
import logo from '../../assets/logo_light.png';

function Guide() {
  return (
    <div className="guide">
      <h1 class="us" style={{textAlign: 'center'}}>Site Funcionality</h1>
      <h3 style={{textAlign: 'center'}}>A short guide that will help you use our application efficiently and without problems and achieve what you want</h3>

      <div class="sections">
        <h3>Do you want to order a product?</h3>
        <img src={buy} class="buy"></img>
        <ul>
          <li><p>On the main page you can see information about current and upcoming discounts, and other information that will help you make a purchase with a profit.</p></li>
          <li><p>To place an order or pre-order you need to be an authorized user, you can log in by clicking on the "LOGIN" icon in the header, then follow the instructions</p></li>
          <li><p>You also need to attach a card for a purchase, you can attach a card by clicking on the "CART" button</p></li>
          <li><p>After the above mandatory steps, in order to select a product, you need to go to the "STORE" section, where you will need to select categories, therefore, also select the product itself</p></li>
        </ul>
      </div>

      <div class="sections">
        <h3>Do you want to know about your actions?</h3>
        <img src={actions} class="buy"></img>
        <ul>
          <li><p>You can find out how many bonuses you have on your wallet in the same way as you attached, that is, by clicking on the "CART" button in the header</p></li>
          <li><p>To see your cart, you need to click on the icon in the header</p></li>
        </ul>
      </div>
      <div class="sections">
        <h3>Want to know more about us?</h3>
        <img src={logo} class="buy"></img>
        <ul>
          <li><p>To find out more about the project, go to "About Us" in the header</p></li>
          <li><p>We are in social networks, go to the icons of the social networks that interest you in the footer</p></li>
          <li><p>More details can be found by clicking on the links in the title</p></li>
        </ul>
      </div></div>
  );
}

export default Guide;