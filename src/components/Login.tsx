import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

import links from './Links';
interface UserDatabase {
  [key: string]: string;
}

interface LoginProps {
  onLoginSuccess?: (username: string) => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  // Moved testUsers into state so that when you "create" an account,
  // it actually saves for the duration of your session to test it out.
  const [testUsers,] = useState<UserDatabase>({
    user1: "password55",
  });
  const [adminUsers,] = useState<UserDatabase>({
    admin: "admin123",
  });
  const navigate = useNavigate();
  // UI State: Toggle between Login and Create Account modes
  const [isLoginView, setIsLoginView] = useState<boolean>(true);

  // Form Field State
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>(''); // New field for sign up

  // Messaging State
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (isLoginView) {
      // --- LOGIN LOGIC ---
      if (testUsers[username] && testUsers[username] === password) {
        setMessage(`Login Successful! Welcome back, ${username}.`);
        setIsSuccess(true);
        onLoginSuccess?.(username);
        navigate(links.account);
      } else if (adminUsers[username] && adminUsers[username] === password) {
        setMessage(`Login Successful! Welcome back, ${username}.`);
        setIsSuccess(true);
        onLoginSuccess?.(username);
        navigate(links.dashboard);
      } else {
        setMessage('Invalid username or password.');
        setIsSuccess(false);
      }
    } else {
      // --- SIGN UP LOGIC ---
      // For now, just show confirmation that the email was submitted
      // In the future, this will check against pre-approved emails
      setMessage(`Account creation link sent to ${email}. Please check your email.`);
      setIsSuccess(true);
      setEmail('');
    }
  };

  // Helper function to reset form when switching views
  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setMessage('');
    setIsSuccess(null);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="login-container">
      <h2 className="login-header">{isLoginView ? 'Login' : 'Create Account'}</h2>
      
      <form onSubmit={handleSubmit} className="login-form-inner">
        
        {/* Email field for Sign Up view */}
        {!isLoginView && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              placeholder="Enter your email address"
            />
          </div>
        )}

        {/* Username and Password fields for Login view */}
        {isLoginView && (
          <>
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
          </>
        )}

        {message && (
          <p className={`login-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <button type="submit" className="login-button">
          {isLoginView ? 'Sign In' : 'Create an Account'}
        </button>
      </form>

      {/* Toggle Link at the bottom */}
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.9rem' }}>
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
        </span>
        <button 
          type="button" 
          onClick={toggleView}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#007BFF', 
            cursor: 'pointer', 
            textDecoration: 'underline',
            fontSize: '0.9rem',
            padding: 0
          }}
        >
          {isLoginView ? 'Create an Account' : 'Log In'}
        </button>
      </div>

    </div>
  );
}

export default Login;