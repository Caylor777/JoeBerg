import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import exampleData from '../exampleAccountData.json';
import '../css/Account.css';

type Seminar = {
  date: string;
  attended: boolean;
};

type UserData = {
  username: string;
  seminars: Seminar[];
};

type ExampleData = {
  users: UserData[];
};

function Account() {
  const username = localStorage.getItem('currentUser') ?? 'Guest';

  const users: UserData[] = ((exampleData as unknown) as ExampleData).users ?? [];
  const user = users.find((u: UserData) => u.username === username);
  const [emailInput, setEmailInput] = useState<string>(localStorage.getItem('currentUserEmail') ?? '');
  const [emailMsg, setEmailMsg] = useState<string>('');

  const [currentPass, setCurrentPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [passMsg, setPassMsg] = useState<string>('');

  const handleEmailChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage for demo purposes
    localStorage.setItem('currentUserEmail', emailInput);
    setEmailMsg('Email updated (demo).');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPass) {
      setPassMsg('Please enter a new password.');
      return;
    }
    if (newPass !== confirmPass) {
      setPassMsg('New password and confirmation do not match.');
      return;
    }
    // Demo: store a per-user password in localStorage (not secure)
    localStorage.setItem(`pw_${username}`, newPass);
    setPassMsg('Password updated (demo).');
    setCurrentPass('');
    setNewPass('');
    setConfirmPass('');
  };

  return (
    <div className="account-page">
      <Navbar />
      <div className="account-container">
        <h1>Account Page</h1>
        <p>Welcome, {username}!</p>

        <div className="account-layout">
          {/* Left: Seminars */}
          <div className="account-left">
            <h2>Seminar Attendance</h2>
            {user && user.seminars && user.seminars.length > 0 ? (
              <table className="account-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Attended</th>
                  </tr>
                </thead>
                <tbody>
                  {user.seminars.map((s: Seminar, i: number) => (
                    <tr key={i}>
                      <td>{s.date}</td>
                      <td style={{ textAlign: 'center' }}>{s.attended ? '✓' : '✖'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No seminar records found for {username}.</p>
            )}
          </div>

          {/* Right: Account actions */}
          <aside className="account-right">
            <div className="account-card">
              <h3>Change Email</h3>
              <form onSubmit={handleEmailChange}>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="you@example.com"
                  className="account-input"
                />
                <button type="submit" className="account-button">Update Email</button>
              </form>
              {emailMsg && <p className="account-msg-success">{emailMsg}</p>}
            </div>

            <div className="account-card">
              <h3>Change Password</h3>
              <form onSubmit={handlePasswordChange}>
                <input
                  type="password"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  placeholder="Current password"
                  className="account-input"
                />
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="New password"
                  className="account-input"
                />
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="Confirm new password"
                  className="account-input"
                />
                <button type="submit" className="account-button">Change Password</button>
              </form>
              {passMsg && <p className={passMsg.includes('updated') ? 'account-msg-success' : 'account-msg-error'}>{passMsg}</p>}
            </div>
          </aside>
        </div>

        <p style={{ marginTop: 18 }}>This is where users can manage their account details, view their seminar schedule, and access exclusive content.</p>

      </div>
      <Footer />
    </div>
  );
}

export default Account;