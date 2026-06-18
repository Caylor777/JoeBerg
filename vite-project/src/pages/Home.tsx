import Navbar from '../components/Navbar';
import '../css/Home.css';

import donationQR from '/DonationQR.svg';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <section className="intro-section">
          <h1>Welcome to the Joe Berg Seminars</h1>
          <p>The Joe Berg Seminars (formerly The Jacksonville Joe Berg Seminars and the Joe Berg Society) is a program established in 1960 in Jacksonville, Florida to provide outstanding high school students with unique seminars and experiences presented by people from the northeast Florida area and beyond who work in the sciences and humanities. We are a community partner of the University of North Florida.</p>
        </section>

        <section className="donation-section">
          <div className="donation-text">
            <a href="/donate">
              <h2>Support us with your tax-deductible donation!</h2>
            </a>
            <p>Joe Berg Scholars pay nothing to be members of The Joe Berg Seminars, and speakers volunteer for no compensation.  Individual and corporate donations support our work to maintain our existing program and to fund the expansion we envision. You can invest in the future of this unique program with a tax-deductible gift through the UNF Foundation, a 501c3 public charity, by visiting our Donors page or scanning this QR code.</p>
          </div>
          <img src={donationQR} alt="Donation QR Code" className="qr-code" />
        </section>
      </div>
    </div>
  );
}

export default Home;