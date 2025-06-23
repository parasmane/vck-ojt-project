import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const HomePage = () => {
  return(
    <div>
      <Header/>
      <div class="page-container">
      <div class="hero-section"><img  src="./images/college-banner-Cz0xylpt.png" class="hero-banner-image " ></img><div class="hero-overlay-text"><h1>Welcome to Vivekanand College!</h1><p>Your journey to excellence starts here.</p><a class="btn hero-btn" href="/admissions" data-discover="true">Apply Now!</a> </div></div>

      <div class="home1">
      
      <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
              <li>**Legacy of Excellence: Decades of commitment to quality education.</li>
              <li>**Experienced Faculty: Learn from renowned experts and passionate educators.</li>
              <li>**Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
              <li>**Holistic Development:Focus on co-curricular activities, sports, and community service.</li>
              <li>**Strong Placements: Excellent career opportunities with leading companies.</li>
       </ul>
       <h2>Campus Life & Facilities</h2>
       <img  src="./images/students-studying-DbLGuwF_.jpeg" height={200}></img>
       <img  src="./images/campus-life-Crkero7B.jpg" height={200}></img>
       <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
           <div class="call-to-action">
              <p>Ready to explore our courses?</p>
              <a class="button" href="/courses" >
                Explore Courses
              </a>
            </div>
      </div>
    </div>
     
    <Footer/>
</div>
   
  )

}
export default HomePage