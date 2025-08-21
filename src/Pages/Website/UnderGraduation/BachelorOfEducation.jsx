 import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
 import {
  FaChild,
  FaChalkboardTeacher,
  FaLaptop,
  FaBookReader,
  FaSchool
} from "react-icons/fa";

function BCA() {
    return (
       <>

  <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-0 text-center doz-arts">Bachelor of Education (B.Ed.)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Education (B.Ed.) is a <strong>two-year professional program</strong> designed to prepare students for teaching and educational leadership roles. At Ghanshyam Group of Institutions, the B.Ed. course integrates <strong>pedagogical theories, educational psychology, curriculum planning, and practical teaching experience</strong>, enabling aspiring teachers to shape the future of young learners.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The program blends theory with real classroom experience, covering essential areas of modern teaching.
              </p>

              <h6 className="doz-st-para mb-0"><FaChild size={22} color="#095287" />&nbsp; Child Development & Educational Psychology:</h6>
              <p className="doz-hse-text">
                Understanding learning stages, behavioral patterns, and motivation.
              </p>

              <h6 className="doz-st-para mb-0"><FaChalkboardTeacher size={22} color="#095287" />&nbsp; Teaching Methods:</h6>
              <p className="doz-hse-text">
                Subject-specific pedagogy for Science, Mathematics, Social Studies, and Languages.
              </p>

              <h6 className="doz-st-para mb-0"><FaLaptop size={22} color="#095287" />&nbsp; Curriculum Design & Assessment:</h6>
              <p className="doz-hse-text">
                Lesson planning, evaluation methods, and use of ICT in education.
              </p>

              <h6 className="doz-st-para mb-0"><FaBookReader size={22} color="#095287" />&nbsp; Educational Philosophy & Sociology:</h6>
              <p className="doz-hse-text">
                Historical perspectives, thinkers in education, and role of education in society.
              </p>

              <h6 className="doz-st-para mb-0"><FaSchool size={22} color="#095287" />&nbsp; Practical Training:</h6>
              <p className="doz-hse-text">
                School internships, classroom teaching practice, and microteaching exercises.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  The program builds <strong>teaching methodologies, classroom management, leadership, empathy, mentoring, communication, and curriculum design skills.</strong>
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  B.Ed. graduates can become <strong>school teachers (primary, secondary, and higher secondary), curriculum developers, education administrators, counselors, special educators, and teacher trainers.</strong> With higher studies (<strong>M.Ed., Ph.D.</strong>), they can also enter <strong>college/university teaching and educational research</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   <Footer />
      </>
       );
}

export default BCA;