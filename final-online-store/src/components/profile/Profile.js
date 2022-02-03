import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthUpdate } from '../../contexts/AuthContext';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
  const setIsAuthed = useAuthUpdate();
  const navigate = useNavigate();

  const logout = () => {
    setIsAuthed(false);
    navigate('/');
  };

  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div className="profile-data">
        <div className="profile-data-img">
          <img src={user.image} alt="" />
        </div>
        <h3>Name: {user.name}</h3>
        <h3>Nickname: {user.username}</h3>
        <h3>Wallet Balance: {user.wallet}$</h3>
        <h3>Total Items in the Cart: {user.cart.length}</h3>
      </div>
      <button className="profile-button" onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Profile;