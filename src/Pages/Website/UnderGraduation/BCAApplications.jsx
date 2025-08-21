  import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaProjectDiagram,
  FaRobot,
  FaLaptopCode
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
              <h1 className="mb-0 text-center doz-arts">Bachelor of Computer Applications (B.C.A.)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Computer Applications (B.C.A.) is a <strong>three-year undergraduate program</strong> designed for students who want to build a career in computer science, software development, and information technology. At Ghanshyam Group of Institutions, the B.C.A. program blends <strong>theory with practice</strong>, ensuring that students not only learn programming concepts but also apply them in real-world scenarios. With the growing demand for IT professionals in India and abroad, this program prepares students to be <strong>future-ready</strong>.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The program builds a strong foundation in programming, software development, databases, and emerging tech.
              </p>

              <h6 className="doz-st-para mb-0"><FaCode size={22} color="#095287" />&nbsp; Programming Languages:</h6>
              <p className="doz-hse-text">
                C, C++, Java, Python, and Object-Oriented Programming.
              </p>

              <h6 className="doz-st-para mb-0"><FaDatabase size={22} color="#095287" />&nbsp; Database Management:</h6>
              <p className="doz-hse-text">
                SQL, Oracle, data modeling, and relational database concepts.
              </p>

              <h6 className="doz-st-para mb-0"><FaGlobe size={22} color="#095287" />&nbsp; Web Technologies:</h6>
              <p className="doz-hse-text">
                HTML, CSS, JavaScript, PHP, and frameworks for web development.
              </p>

              <h6 className="doz-st-para mb-0"><FaProjectDiagram size={22} color="#095287" />&nbsp; Software Engineering:</h6>
              <p className="doz-hse-text">
                SDLC models, project management, agile development, and software testing.
              </p>

              <h6 className="doz-st-para mb-0"><FaRobot size={22} color="#095287" />&nbsp; Emerging Areas:</h6>
              <p className="doz-hse-text">
                Artificial Intelligence, Cloud Computing, Cybersecurity, Mobile App Development.
              </p>

              <h6 className="doz-st-para mb-0"><FaLaptopCode size={22} color="#095287" />&nbsp; Practical Training:</h6>
              <p className="doz-hse-text">
                Minor and major projects, internships, coding hackathons, and real-world assignments.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students gain <strong>logical reasoning, coding proficiency, problem-solving ability, database handling, teamwork, and project management skills.</strong> They also become familiar with industry-standard tools, frameworks, and platforms, making them employable from day one.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  B.C.A. graduates can work as <strong>software developers, system administrators, web developers, IT consultants, mobile app developers, database managers, cybersecurity analysts, and data scientists.</strong> Many graduates also pursue higher studies such as <strong>M.C.A., M.Sc. (IT), or MBA (IT).</strong>
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