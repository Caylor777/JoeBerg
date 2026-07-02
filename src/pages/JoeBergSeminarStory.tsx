import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/TextPages.css';
import bergPlanCollageImage from '/berg-plan-collage.png';
import links from '../components/Links';

function JoeBergSeminarStory() {
  return (
    <div className="home-page">
      <Navbar />

      <div className="JBS-Future-Vision">
        <h1>The Joe Berg Seminars Story</h1>
        <p>
          Way back in the 1950s, Chicago trucking equipment manufacturer Joseph Berg
          (pictured below) was impressed by the “Science Seminar” program his grandson
          entered at Niles Township Community High School in Skokie, Illinois. This
          program featured weekly seminars by local experts in science and engineering,
          followed by sessions in which the experts would give the students advice on
          their school science projects.
        </p>
        <p>
          Joseph Berg thought such a program could stimulate interest in science
          throughout the nation. So in November 1957, one month after the Soviet Union
          launched Sputnik I, he founded the Joe Berg Foundation. Jacob W. Shapiro,
          who had created the Science Seminar program at the Niles Township high school
          in 1955, became the Coordinator of the Joe Berg Foundation and began spreading
          the Science Seminar model around the country.
        </p>
        <p>
          The image below shows the cover to the original brochure of the Joe Berg
          Foundation, a photograph of Joseph Berg, and the symbol and motto of the Joe
          Berg Foundation.
        </p>
        <a href="https://www.joeberg.org/uploads/5/7/0/8/57081557/the_berg_plan_1.pdf" className="image-link">
          <img
            src={bergPlanCollageImage}
            alt="The Berg Plan collage"
            className="story-image"
          />
        </a>
        <p>
          <strong>
            For a bit of 1950s nostalgia, click on the image to download a copy of the
            complete original brochure for yourself, then read on below for more about
            the Jacksonville Joe Berg Seminars.
          </strong>
        </p>
        <p>
          <a href="https://www.joeberg.org/uploads/5/7/0/8/57081557/opportunity_for_the_brilliant_science_student_-_readers_digest_august_1958_opt.pdf">
            Other historical documents can be found in Joe Berg Historical Files.
          </a>
        </p>

        <p>
          In 1960, the Southside Kiwanis Club in Jacksonville, Florida heard about the
          Berg Plan and introduced the concept to the Duval County School Board. The
          school board adopted it, but modified the original concept so that seminars
          were offered without after-seminar advising. This made the program available
          to gifted science students in a majority of the county's public schools,
          broadening the reach while lessening the intensity of the program.
        </p>
        <p>
          Students nominated by their teachers and guidance counselors tested for admission
          into the two-year Joe Berg program in the fall of their sophomore year, and
          the Kiwanis Club held a graduation banquet for the students in the spring of
          their senior year.
        </p>
        <p>
          The program must have been a huge success immediately, because in 1963 a
          Humanities seminar series started running alongside the Science series.
          The school board supported the program until 2000, when the University of North
          Florida became responsible for it. UNF terminated financial support as a
          result of the financial crisis of 2007-2008, and we have been supported by
          individual and corporate donations to our tax-exempt UNF Foundation account
          since then.
        </p>

        <p>
          Today, the Jacksonville Joe Berg Seminars still tests students in the fall of
          their sophomore year and admits about 55 Joe Berg Scholars into each track,
          Humanities and Science. In January they join the existing junior classes which
          have usually dropped to around 40 Scholars each at that time, because students
          have to maintain attendance in the seminars or be dismissed from the program.
          So each January finds about 190 Scholars in the program, usually coming from
          16-18 different schools.
        </p>
        <p>
          In addition to maintaining seminar attendance, Scholars must perform a minimum
          number of hours of community service during their junior year. Graduation from
          Joe Berg occurs in January of the Scholars' senior year. By then they have all
          been exposed to 24 to 28 hour-and-a-half-long seminars in a variety of subjects
          in the fields of science or humanities. The Jacksonville community is very
          generous to these students. Excellent speakers are eager to share their fields
          with these bright young people for no stipend. Various organizations also host
          site tours for Joe Berg students.
        </p>

        <p>
          The Jacksonville Joe Berg Seminars provides gifted students in the Jacksonville
          area and beyond with an opportunity to interact with leading experts in the
          fields of science and the humanities, as well as with civic and community
          leaders. This is an experience they are unlikely to get at their high school,
          and which we hope helps them to effect positive change in their schools, their
          communities, and the rest of the world.
        </p>

        <p>
          <Link to= {links.obituary} >
            Joe Berg's obituary, published in the New York Times on July 8, 1964,
          </Link>
          stated that the Joe Berg Foundation had established more than 700 science seminar
          programs in the US and Canada. Today there remain only our program and one other
          one, the Science Seminar in Wachusett Regional High School in Holden,
          Massachusetts.
        </p>

        <p>
          With luck and support (<Link to={links.donate}>please make a donation if you are able</Link>), perhaps one day the Joe Berg
          Seminars experience will once again become available throughout the country.
          Maybe even, throughout the world?
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default JoeBergSeminarStory;
