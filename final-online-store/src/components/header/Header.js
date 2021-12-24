import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo_light.png';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link className="link-deco" to="/">
            <img src={logo} width="64" alt="" />
          </Link>
        </li>

        <li>
          <Link className="link-deco" to="/categories">Store</Link>
        </li>

        <li>
          <Link className="link-deco" to="/about">About Us</Link>
        </li>

        <li>
          <Link className="link-deco" to="/guide">Guide</Link>
        </li>
      </ul>

      <div className="header-rightside">
        <Link className="link-deco" to="/cart">Cart</Link>

        <Link className="link-deco" to="/login">
          <img src="https://cdn4.iconfinder.com/data/icons/app-seo-bolt-line/128/Bolt_Line_Mix_-04-256.png" width="44" alt="" />
        </Link>
      </div>
    </header>
  );
}

export default React.memo(Header);