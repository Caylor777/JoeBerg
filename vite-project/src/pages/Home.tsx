import Navbar from '../components/Navbar';

import donationQR from '/DonationQR.svg';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Joe Berg Seminars</h1>
      <p>The Joe Berg Seminars (formerly The Jacksonville Joe Berg Seminars and the Joe Berg Society) is a program established in 1960 in Jacksonville, Florida to provide outstanding high school students with unique seminars and experiences presented by people from the northeast Florida area and beyond who work in the sciences and humanities. We are a community partner of the University of North Florida.</p>
      <br/>
      <h1>Support us with your tax-deductible donation!</h1>
      <p>Joe Berg Scholars pay nothing to be members of The Joe Berg Seminars, and speakers volunteer for no compensation.  Individual and corporate donations support our work to maintain our existing program and to fund the expansion we envision. You can invest in the future of this unique program with a tax-deductible gift through the UNF Foundation, a 501c3 public charity, by visiting our Donors page or scanning this QR code.</p>
      <img src={donationQR} alt="Donation QR Code" />
    </div>
  );
}

export default Home;