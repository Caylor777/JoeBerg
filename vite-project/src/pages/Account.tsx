import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Account() {
  return (
    <div className="account-page">
      <Navbar />
      <div className="account-container">
        <h1>Account Page</h1>
        <p>This is where users can manage their account details, view their seminar schedule, and access exclusive content.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Account;