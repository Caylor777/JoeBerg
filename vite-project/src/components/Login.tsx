import React, { FormEvent } from 'react';
import useState from 'react';
// 1. Define types for your hardcoded database
interface UserDatabase {
  [key: string]: string;
}

function Login() {
  // 2. Hardcoded accounts for your tests
  const testUsers: UserDatabase = {
    admin: "admin123",
    user1: "password55",
  };

  // 3. Setup React state to track inputs and messages
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // 4. Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevents page reload

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

      {/* 5. Conditional message feedback rendering */}
      {message && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: isSuccess ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;