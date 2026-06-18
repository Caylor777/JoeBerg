import { useState } from 'react';
import type { SyntheticEvent } from 'react';
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
        <div>
          <label htmlFor="username" style={{ display: 'block' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '6px' }}
          />
        </div>

        <div>
          <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '6px' }}
          />
        </div>

        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>
          Submit Test Login
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: isSuccess ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;