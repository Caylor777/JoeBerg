import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Dashboard() {
  const username = localStorage.getItem('currentUser') ?? 'Admin';
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {username}!</p>
        <p>This is where administrators can manage seminar content, view user analytics, and perform other administrative tasks.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;