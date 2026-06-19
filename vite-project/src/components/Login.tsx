import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import '../css/Login.css';

interface UserDatabase {
  [key: string]: string;
}

function Login() {
  // Moved testUsers into state so that when you "create" an account,
  // it actually saves for the duration of your session to test it out.
  const [testUsers, setTestUsers] = useState<UserDatabase>({
    admin: "admin123",
    user1: "password55",
  });

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
      } else {
        setMessage('Invalid username or password.');
        setIsSuccess(false);
      }
    } else {
      // --- SIGN UP LOGIC ---
      if (testUsers[username]) {
        setMessage('Username already exists. Please choose another.');
        setIsSuccess(false);
      } else {
        // Add the new user to our local "database" state
        setTestUsers(prevUsers => ({
          ...prevUsers,
          [username]: password
        }));
        setMessage(`Account created successfully! Welcome, ${username}.`);
        setIsSuccess(true);
        
        // Optional: Automatically switch them back to the login view after a second
        // setTimeout(() => setIsLoginView(true), 2000); 
      }
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
        
        {/* Conditionally render the Email field ONLY if we are in Sign Up view */}
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
          {isLoginView ? 'Sign In' : 'Sign Up'}
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
          {isLoginView ? 'Sign Up' : 'Log In'}
        </button>
      </div>

    </div>
  );
}

export default Login;