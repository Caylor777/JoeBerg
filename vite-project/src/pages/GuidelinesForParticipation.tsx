import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/TextPages.css';

import links from '../components/Links'

function GuidelinesForParticipation() {
  return (
    <div className="home-page">
      <Navbar />

      <div className="JBS-Future-Vision">
        <h1>Guidelines for Participation</h1>
        <h3>A summary of expectations and opportunities as a Joe Berg Scholar</h3>
      </div>
      <div className="guidelines-section">
        <ul><li>
            <strong>Eligibility and membership:</strong> You must be nominated by a school
            counselor, teacher, or administrator to take the Joe Berg Seminars qualifying
            exam. You cannot apply directly to us, but you may ask one of those folks to
            nominate you.
          </li>
          <li>
            <strong>Qualifying exam:</strong> You must pass a qualifying exam given at a date,
            time, and place specified by the Joe Berg Staff. If you pass the qualifying exam,
            you will be offered the opportunity to become a member of the Joe Berg Seminars.
            When you arrive to take the qualifying exam you will choose either the Science
            exam or the Humanities exam.
          </li>
          <li>
            If your score meets the admission criteria, you will be invited to become a Joe
            Berg Scholar. If you choose to join, you will be either a Science Scholar or a
            Humanities Scholar (depending on which qualifying exam you took) for the duration
            of your time in Joe Berg.
          </li>
          <li>
            To accept membership, you must fill out an acceptance form that will be made
            available to you in your acceptance email message. Make sure that you and your
            parents read and understand these Guidelines in their entirety, and indicate
            that you have done so on the acceptance form.
          </li>
        </ul>

        <p>
          Once admitted to The Joe Berg Seminars, you will be an active Joe Berg Scholar from the
          spring semester of your sophomore year until the fall semester of your senior year
          (seminars will not — usually — be held during the summer). Your graduation ceremony
          will generally occur in January of your senior year of high school.
        </p></div>

      <div className="guidelines-section">
        <h2>Seminars</h2>
        <p>
          There will typically be seven (7) seminars for the Science track and seven (7)
          for the Humanities track during each semester (sophomore spring, junior fall, junior spring,
          senior fall). Sometimes there are more, rarely there are less.
        </p>
        <p>
          Seminars are currently held on the University of North Florida campus
          (<a href="https://maps.unf.edu" target="_blank" rel="noreferrer">maps.unf.edu</a>).
          The exact location can vary, so check your email and the{' '}
          <Link to= {links.seminarCalendar} >Seminar Calendar</Link> to be sure of the location.
          Check-in for seminars normally begins at 6:30 PM. The seminar normally begins at
          7:00 PM and is over by 8:30 PM. You will be notified by email and in the{' '}
          <Link to= {links.seminarCalendar} >Seminar Calendar</Link> if there are any changes.
        </p>
        <p>
          <strong>Important:</strong> These are college-level seminars. Be ready to have your
          views challenged, which is one of the great things about college that helps you grow
          as a person. Feel free to challenge right back if this happens, but do so respectfully.
        </p>
        <p>
          To parents and others providing rides to Scholars: Sometimes seminars go over time.
          Rest assured that Joe Berg Staff will not leave until all Scholars have been picked up,
          but please be ready to pick up your Scholar no later than 8:35 PM.
        </p>
      </div>
      <div className="guidelines-section">
        <h2>Seminar types</h2>
        <ul>
          <li>
            <strong>In-track seminars</strong> — required seminars in Science (usually held on Tuesdays)
            or Humanities (usually held on Thursdays) and are intended for Scholars registered in those
            Joe Berg tracks. Sometimes these days might be switched due to speaker availability, but this
            will be indicated in the <Link to= {links.seminarCalendar} >Seminar Calendar</Link>.
            There are no excused absences (except in extremely extenuating circumstances with documentation),
            but see Bonus seminars below. If you are interested enough in a seminar in the other track to
            attend it, you may do so for credit.
          </li>
          <li>
            <strong>Xtrack seminars</strong> — seminars on topics that bridge across the two tracks and
            are required for both Science and Humanities Scholars. Xtrack seminars are held on Tuesday or
            Thursday, depending on speaker preference, on the dates indicated in the{' '}
            <Link to= {links.seminarCalendar} >Seminar Calendar</Link>. There are no excused absences
            (except in extremely extenuating circumstances with documentation) but see Bonus seminars below.
          </li>
          <li>
            <strong>BONUS seminars</strong> — for both Science and Humanities Scholars, and we try to offer
            at least one per seminar. They generally have limited seating, so if we let you know there is one
            upcoming, sign up for it as soon as you can if you would like to attend, because bonus seminars
            can make up for missing a required seminar.
          </li>
        </ul>
      </div>
      <div className="guidelines-section">
        <h2>Maintaining membership</h2>
        <p>
          <strong>70/50 Attendance Requirement:</strong> You must attend a number of seminars equivalent to
          at least 70% of the total number of seminars offered for your track during your entire time as a
          Joe Berg Scholar.
        </p>
        <p>
          To encourage Science Scholars to experience some of the Humanities seminars — sort of like cross-pollination —
          attendance at Humanities seminars they find interesting counts toward their overall attendance, and vice versa
          for Humanities Scholars. So, for ALL Scholars, the overall attendance percentage calculation is
          <strong>(total seminars attended) / (total required for your track)</strong>, and this must be 70% to graduate.
        </p>
        <p>
          You must also attend at least 50% of the required seminars offered for your track each semester.
          For example, if all four semesters have seven required seminars, there are 28 total, and you must attend at
          least 20 seminars to satisfy the 70% overall requirement and at least 4 seminars in each semester to satisfy
          the 50% requirement.
        </p>
        <p>
          We do not require 100% attendance because we understand that Joe Berg Scholars are involved in other
          extracurricular activities that sometimes conflict with seminars. So even though there are no excused absences
          (except in extremely extenuating circumstances with documentation), you can miss some seminars during your
          two-year tenure as a Joe Berg Scholar. Those that you miss can be offset by attending Bonus seminars.
          However, be aware that if you do not attend at least 50% of the seminars offered per semester and 70% overall,
          you will not graduate.
        </p></div>

      <div className="guidelines-section">
        <h2>Grade point average</h2>
        <p>
          You must maintain a 3.0 grade point average on academic subjects. Scholarship may be reviewed at the end of
          each grading period.
        </p></div>

      <div className="guidelines-section">
        <h2>Behavior during seminars</h2>
        <p>
          We expect you to be punctual and courteous at the meetings. Check in and be ready for the seminar by 6:55 PM.
          The speakers are donating their time to prepare a presentation, so show them respect by being prompt to ensure
          an efficient and effective seminar.
        </p>
        <ul>
          <li>Pay attention to the seminar.</li>
          <li>Be respectful of the speaker.</li>
          <li>Do not do homework.</li>
          <li>Do not chat with others about things unrelated to the seminar.</li>
          <li>Do not use electronic devices such as laptops, mobile phones, etc. unless specifically permitted.</li>
          <li>Compensate for this by taking notes in a paper notebook.</li>
          <li>If electronic devices are permitted at a seminar, do not visit sites other than those related to the seminar.</li>
          <li>Do not leave the seminar early without notifying Joe Berg Staff and explaining the reason.</li>
        </ul>
        <p>
          Repeated violation of any of these rules may lead to dismissal from the Joe Berg Seminars.
        </p>
      </div>
      <div className="guidelines-section">
        <h2>Holidays and exam schedules</h2>
        <p>
          The seminars offer valuable experiences that are wasted if you do not attend. Participation in Joe Berg requires
          you to prioritize activities and manage your time carefully. In setting up the seminar calendar, we try to work
          around the holidays and exam schedules of the Scholars' schools. Because Scholars come from a mix of public and
          private schools, it is difficult to avoid all of the holidays and exams of all of the schools. Therefore,
          careful planning is needed by students and parents to make sure the minimum attendance requirements will be met.
        </p></div>

      <div className="guidelines-section">
        <h2>Be responsible</h2>
        <p>
          Make sure you are aware of upcoming seminars and other opportunities. Consult the{' '}
          <Link to= {links.seminarCalendar}>Seminar Calendar</Link> for advance planning, and we will remind you of each
          upcoming seminar in the days leading up to it with an email sent to the email addresses you provide us.
        </p>
        <p>
          So you don't miss these reminders and other emails from us, be sure to check your email every day at the email
          addresses you provide us. We will not send you a message every day, but when we do they are important, so don't miss them.
        </p>
        <p>
          If for some reason you are not receiving our email updates, please check your email client’s spam filter in your
          settings and advise us in person, providing us with your correct email addresses.
        </p></div>

      <div className="guidelines-section">
        <h2>Communication</h2>
        <p>
          <strong>All communication will be by email.</strong> We will not use texting of any kind. Therefore, please notify us immediately at{' '}
          <a href="mailto:jbs@joeberg.org">jbs@joeberg.org</a> of any changes to your contact information (email or mailing
          addresses, phone numbers, school, etc.).
        </p>

        <p>
          Parents are welcome to attend seminars with you (if space permits) unless visitors have been specifically prohibited.
        </p>
      </div>
      <div className="guidelines-section">
        <h2>Volunteering</h2>
        <p>
          We encourage all Joe Berg Scholars to participate in volunteer and community service.
        </p>
        <ul>
          <li>
            <strong>On the Web working group:</strong> Members of this group will work on various things related to our online
            presence, such as managing our Facebook and Instagram accounts, working on our website, and developing apps related to
            our website. Scholars who work in this group will earn volunteer credit.
          </li>
          <li>
            <strong>Joe Berg Middle School Club working group:</strong> Members of this group will work at developing and establishing
            clubs at middle schools based on the Joe Berg Seminars model, but relying only on interest as the criterion for joining
            and featuring teachers and Joe Berg Scholars as speakers. Scholars who work in this group will earn volunteer credit.
          </li>
        </ul>

        <p>
          We will provide other volunteer and service opportunities as they arise.
        </p>
        <p>
          Please bring all necessary documentation for Joe Berg staff to sign for community service credit.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default GuidelinesForParticipation;
