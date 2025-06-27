import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
// import CollegeTourVideo from '.../public/videos/college-tour.mp4'; 
const CoursesPage = () => {
  return (
    <div>
      <Header />
      
      <div class="page-container">
      <div class="Courses">
        <h1 id="he">Our Academic Programs</h1>
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and
          postgraduate programs designed to equip students with the knowledge
          and skills demanded by today's dynamic global landscape. Our
          curriculum is regularly updated to reflect industry trends and
          academic advancements.
        </p>
        <h2>Discover Campus Life</h2>
        <video controls width="100%" height="auto" className="course-video">
          <source src="/videos/college-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2>Undergraduate Programs (UG)</h2>
        <ul>
          <li>**Bachelor of Science (B.Sc.)**</li>
          <ul>
            <li>Computer Science (3 years)</li>
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
          </ul>
          <li>**Bachelor of Commerce (B.Com)**</li>
          <ul>
            <li>Accounting & Finance (3 years)</li>
          </ul>
          <li>**Bachelor of Commerce (B.Com)**</li>
        </ul>

        <h2>Postgraduate Programs (PG) (UG)</h2>
        <ul>
          <li>**Master of Science (M.Sc.)**(B.Sc.)**</li>
          <ul>
            <li>Computer Science (2 years)</li>
            <li>Information Technology (2 years) (3 years)</li>
          </ul>
          <li>**Master of Commerce (M.Com)** (2 years)</li>
          <li>**Master of Arts (M.A.)** (2 years)</li>
        </ul>
        <h2>Program Details &amp; Fee Structure (Annual)</h2>
        <table border={1} class="admissions-table course-details-table">
          {" "}
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting &amp; Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>
        <p>Have questions about a specific course?</p>
        <Link to="/contact" class="button">Inquire About Courses</Link>
        
      </div>
      </div>
       <Footer/>
    </div>
  );
};
export default CoursesPage;
