import { useSelector } from 'react-redux';
import { useAuthUpdate } from '../../contexts/AuthContext';
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.user);
  const setIsAuthed = useAuthUpdate();

  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div className="profile-data">
        <img src={user.image} width="150" alt="" />
        <h3>Name: {user.name}</h3>
        <h3>Nickname: {user.username}</h3>
        <h3>Wallet Balance: {user.wallet}</h3>
        <button className="profile-button" onClick={() => setIsAuthed(false)}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;