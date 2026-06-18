import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import '../css/Login.css';

interface UserDatabase {
  [key: string]: string;
}

function Login() {
  const testUsers: UserDatabase = {
    admin: "admin123",
    user1: "password55",
  };

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // CHANGED: Use SyntheticEvent instead of FormEvent
  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault(); 

    if (testUsers[username] && testUsers[username] === password) {
      setMessage(`Login Successful! Welcome, ${username}.`);
      setIsSuccess(true);
    } else {
      setMessage('Invalid username or password.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      
      <form onSubmit={handleSubmit} className="login-form-inner">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your password"
          />
        </div>

        {message && (
          <p className={`login-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;