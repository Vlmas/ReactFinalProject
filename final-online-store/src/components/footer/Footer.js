import './Footer.css';
import logo from '../../assets/logo_light.png';
import sm from '../../assets/sm.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} width="150" alt="" />

      <div className="footer-main-part">
        <h3>Code Store</h3>
        <h3>© 2021 Online Store</h3>
        <h3>Company</h3>
        <h3>Consultation</h3>
      </div>

      <div className="footer-secondary">
        <img src={sm} width="150" alt="" />
        <h4>API</h4>
        <h4>Data</h4>
        <h4>Science</h4>
        <h4>Professional</h4>
        <h4>Enterprise</h4>
        <h4>Privacy Policy</h4>
      </div>

      <p>© Created by a Group of Students</p>
    </footer>
  );
}

export default Footer;