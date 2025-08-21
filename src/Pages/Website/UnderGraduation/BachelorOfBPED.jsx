  import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
 import {
  FaRunning,
  FaUserFriends,
  FaDumbbell,
  FaChalkboardTeacher,
  FaCampground
} from "react-icons/fa";

 function BPED() {
    return (
       <>
  <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-5 text-center doz-arts">Bachelor of Physical Education (B.P.Ed.)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Physical Education (B.P.Ed.) is a <strong>two-year undergraduate professional program</strong> that trains students in sports sciences, fitness, and education. At Ghanshyam Group, the course blends <strong>theory, physical training, and practical coaching</strong>, preparing students for careers in physical education, sports management, and health sciences.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The curriculum combines academic foundations with physical and coaching experience.
              </p>

              <h6 className="doz-st-para mb-0"><FaRunning size={22} color="#095287" />&nbsp; Exercise Physiology & Anatomy:</h6>
              <p className="doz-hse-text">
                Understanding body movement, performance, and health.
              </p>

              <h6 className="doz-st-para mb-0"><FaUserFriends size={22} color="#095287" />&nbsp; Sports Psychology & Coaching:</h6>
              <p className="doz-hse-text">
                Motivation, leadership, and athlete management.
              </p>

              <h6 className="doz-st-para mb-0"><FaDumbbell size={22} color="#095287" />&nbsp; Training Methods & Physical Fitness:</h6>
              <p className="doz-hse-text">
                Advanced exercise methods, sports conditioning, and physical drills.
              </p>

              <h6 className="doz-st-para mb-0"><FaChalkboardTeacher size={22} color="#095287" />&nbsp; Physical Education Pedagogy:</h6>
              <p className="doz-hse-text">
                Teaching techniques for schools and colleges.
              </p>

              <h6 className="doz-st-para mb-0"><FaCampground size={22} color="#095287" />&nbsp; Outdoor Training:</h6>
              <p className="doz-hse-text">
                Athletics, games, yoga, adventure sports, and recreational activities.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students acquire <strong>fitness training, sports coaching, leadership, teamwork, communication, and health education skills.</strong> They also develop <strong>discipline and mentoring qualities</strong> essential for guiding athletes and students.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can become <strong>physical education teachers, sports coaches, fitness trainers, gym instructors, physiotherapy assistants, and sports managers.</strong> They can also pursue <strong>M.P.Ed., M.Phil., or Ph.D.</strong> for advanced careers in sports education and research.
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

export default BPED;