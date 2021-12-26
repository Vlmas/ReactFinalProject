import { useEffect, useState } from 'react';
import { useAuth, useAuthUpdate } from '../../contexts/AuthContext';
import fakeUsers from '../../users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const isAuthed = useAuth();
  const setIsAuthed = useAuthUpdate();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'username-input':
        setUsername(e.target.value);
        break;
      case 'password-input':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    let succeed = false;
    users.map((user) => {
      if (user.username === username) {
        if (user.password === password) {
          succeed = true;
          setAlert(false);
          setIsAuthed(true);
          dispatch({ type: 'SET_USER', payload: { ...user, cart: [1, 2, 3] } });
          navigate(-1);
        }
      }
    });
    if (!succeed) {
      setIsAuthed(false);
      setAlert(true);
    }
  };

  const handleRegister = () => {

  };

  useEffect(() => {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') === undefined) {
      localStorage.setItem('users', JSON.stringify(fakeUsers));
    }
    let tempUsers = JSON.parse(localStorage.getItem('users'));
    setUsers(tempUsers);
  }, []);

  return (
    <div className='login'>
      {(!isAuthed) && (
        <div className="not-logged">
          <div className="form-container">
            <div className="input-fields">
              <div>
                <label htmlFor="username-input">Username</label>
                <input type="text" name="username-input" id="username-input" value={username} onChange={handleInput} />
              </div>
            </div>

            <div className="input-fields">
              <div>
                <label htmlFor="password-input">Password</label>
                <input type="password" name="password-input" id="password-input" value={password} onChange={handleInput} />
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button onClick={handleSubmit}>Continue</button>
            <button onClick={handleRegister}>Register</button>
          </div>

          {alert && (
            <div className="input-alert">
              <h4>Incorrect username or password. Please, try again</h4>
            </div>
          )}
        </div>
      )}

      {(isAuthed) && (
        <h2>you are logged</h2>
      )}
    </div>
  );
}

export default Login;