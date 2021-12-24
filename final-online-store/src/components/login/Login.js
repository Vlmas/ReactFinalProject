import { useState } from 'react';
import { useAuthUpdate } from '../../contexts/AuthContext';
import { users } from '../../users';
import './Login.css';

function Login() {
  const setIsAuthed = useAuthUpdate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleInput = (e) => {
    console.log('I\'m called!')
    switch(e.target.name) {
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

  const handleSubmit = (e) => {
    let succeed = false;
    users.map((user) => {
      if(user.username === username) {
        if(user.password === password) {
          succeed = true;
          setAlert(false);
          setIsAuthed(true);
        }
      }
    });
    if(!succeed) {
      setIsAuthed(false);
      setAlert(true);
    }
  };

  return (
    <div className='login'>
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

      <button onClick={handleSubmit}>Submit</button>

      {alert && (
        <div className="input-alert">
          <h4>Incorrect username or password. Please, try again</h4>
        </div>
      )}
    </div>
  );
}

export default Login;