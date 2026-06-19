import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/JBSfutureVision.css';

function Donate() {
  return (
    <div className="home-page">
      <Navbar />

      <div className="donate-content">
        <h1>Supporting the Joe Berg Seminars</h1>

        <p>
          Joe Berg Scholars pay nothing to be members of the Jacksonville Joe Berg Seminars, and we do not intend to change this policy, which has been in place since 1960. We want the Joe Berg experience to be accessible to all qualified students regardless of their financial situation.
        </p>

        <p>
          The Joe Berg staff works hard to make this experience possible, and we need financial support for them as well as for ongoing operating costs and the future development of this important program. Please consider making an individual or corporate tax-deductible gift to support Joe Berg through the UNF Foundation, a 501(c)(3) public charity.
        </p>

        <ul>
          <li>
            You can make your gift electronically by clicking the link below to go to the "Joe Berg Seminar Series Fund" page at the UNF Foundation:
            <br />
            <a
              href="https://give.unf.edu/joebergseminarseries"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Joe Berg Seminar Series Fund at the UNF Foundation</strong>
            </a>
          </li>
          <li>
            If you would prefer to mail in your gift, please download, print, and fill out the form for an individual or corporate donation at the links below and mail it to the address on the form:
            <br />
            <a
              href="https://www.joeberg.org/uploads/5/7/0/8/57081557/joe_berg_-_individual_donation_form_2023.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Individual Donation Form</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.joeberg.org/uploads/5/7/0/8/57081557/joe_berg_-_corporate_donation_form_2023.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Corporate Donation Form</strong>
            </a>
          </li>
        </ul>

        <p>
          <strong>Would you or someone you know like to offer ongoing support?</strong> The Jacksonville Joe Berg Seminars and its budding Scholars, the leaders of tomorrow, have much to offer our community, our nation, and the world, but we need ongoing assistance to ensure the program continues. We would welcome recurring annual donations from organizations, firms, foundations, and people. If you know a person or organization that might want the opportunity to have this kind of impact, please let us know at <a href="mailto:joebergjax@gmail.com">joebergjax@gmail.com</a>!
        </p>

        <p>
          <strong>We would be happy to knock on a door or make a presentation (or both)</strong> about the Jacksonville Joe Berg Seminars. Please contact us at <a href="mailto:joebergjax@gmail.com">joebergjax@gmail.com</a> with your suggestions.
        </p>

        <p>
          Help us and our enthusiastic young people, so this unique program may continue well into its second half-century and beyond.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Donate;
