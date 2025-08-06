import React from "react";
import "../../Components/Website/assets/css/our_programs.css";
import { FaUniversity, FaBook, FaFlask, FaSeedling, FaChalkboardTeacher } from 'react-icons/fa';
import { MdSportsHandball } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { FaPills, FaMortarPestle } from 'react-icons/fa';
import { FaBolt, FaWrench, FaTools, FaScrewdriver, FaRobot } from 'react-icons/fa';
import { FaLaptopCode, FaKeyboard, FaShoppingCart, FaTractor, FaBriefcase } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import { FaBullhorn, FaUserTie, FaComments, FaCode } from 'react-icons/fa';

function OurProgram() {
  return (
    <>
      <section className="py-5 our-program-section">
        <div className="container">
          <h2 className="section-heading">Our Programs</h2>
          <p>Empowering Students Across Every Discipline </p>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                      role="tab" aria-controls="pills-home" aria-selected="true" >
                      Undergraduate Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"
                      role="tab" aria-controls="pills-profile" aria-selected="false" >
                      Postgraduate Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-pharmacy-tab" data-bs-toggle="pill" data-bs-target="#pills-pharmacy" type="button"
                      role="tab" aria-controls="pills-pharmacy" aria-selected="false" >
                      Pharmacy Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-iti-tab" data-bs-toggle="pill" data-bs-target="#pills-iti" type="button"
                      role="tab" aria-controls="pills-iti" aria-selected="false">
                      ITI Trades
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-technical-tab" data-bs-toggle="pill" data-bs-target="#pills-technical" type="button"
                      role="tab" aria-controls="pills-technical" aria-selected="false">
                      Professional & Technical
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-agriculture-tab" data-bs-toggle="pill" data-bs-target="#pills-agriculture" type="button"
                      role="tab" aria-controls="pills-agriculture" aria-selected="false">
                      Agriculture Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button"
                      role="tab" aria-controls="pills-skill" aria-selected="false">
                      Short-term Skill Courses
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="course-list">
                          <p><FaBook style={{ fontSize: "25px", color: "#26354D" }} /> B.A.</p>
                          <p><FaFlask style={{ fontSize: "25px", color: "#26354D" }} /> B.Sc.</p>
                          <p><FaUniversity style={{ fontSize: "25px", color: "#26354D" }} /> B.Com</p>
                          <p><FaSeedling style={{ fontSize: "25px", color: "#26354D" }} /> B.Sc. Agriculture (Hons)</p>
                          <p><FaChalkboardTeacher style={{ fontSize: "25px", color: "#26354D" }} /> B.Ed.</p>
                          <p><MdSportsHandball style={{ fontSize: "25px", color: "#26354D" }} /> B.P.Ed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="pg-course-list">
                          <p><FaGraduationCap style={{ fontSize: "25px", color: "#26354D" }} /> M.A.</p>
                          <p><FaFlask style={{ fontSize: "25px", color: "#26354D" }} /> M.Sc.</p>
                          <p><FaUniversity style={{ fontSize: "25px", color: "#26354D" }} /> M.Com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-pharmacy" role="tabpanel" aria-labelledby="pills-pharmacy-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="pharmacy-course-list">
                          <p><FaPills style={{ fontSize: "25px", color: "#26354D" }} /> D.Pharm</p>
                          <p><FaMortarPestle style={{ fontSize: "25px", color: "#26354D" }} /> B.Pharm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-iti" role="tabpanel" aria-labelledby="pills-iti-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="iti-trades-list">
                          <p><FaBolt style={{ fontSize: "25px", color: "#26354D" }} /> Electrician</p>
                          <p><FaWrench style={{ fontSize: "25px", color: "#26354D" }} /> Fitter</p>
                          <p><FaTools style={{ fontSize: "25px", color: "#26354D" }} /> Plumber</p>
                          <p><FaScrewdriver style={{ fontSize: "25px", color: "#26354D" }} /> Welder</p>
                          <p><FaRobot style={{ fontSize: "25px", color: "#26354D" }} /> Electronics Mechanic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-technical" role="tabpanel" aria-labelledby="pills-technical-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="skill-courses-list">
                          <p><FaLaptopCode style={{ fontSize: "25px", color: "#26354D" }} /> Computer Application (DCA/PGDCA)</p>
                          <p><FaKeyboard style={{ fontSize: "25px", color: "#26354D" }} /> Data Entry Operator</p>
                          <p><FaShoppingCart style={{ fontSize: "25px", color: "#26354D" }} /> Retail Management</p>
                          <p><FaTractor style={{ fontSize: "25px", color: "#26354D" }} /> Agri-Extension and Field Technology</p>
                          <p><FaBriefcase style={{ fontSize: "25px", color: "#26354D" }} /> Vocational Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-agriculture" role="tabpanel" aria-labelledby="pills-agriculture-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="agriculture-course-list">
                          <p><FaSeedling style={{ fontSize: "25px", color: "#26354D" }} /> B.Sc. Agriculture</p>
                          <p><FaLeaf style={{ fontSize: "25px", color: "#26354D" }} /> Diploma in Agri Science</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="skills-list">
                          <p><FaBullhorn style={{ fontSize: "25px", color: "#26354D" }} /> Digital Marketing</p>
                          <p><FaUserTie style={{ fontSize: "25px", color: "#26354D" }} /> Soft Skills & Personality Development</p>
                          <p><FaComments style={{ fontSize: "25px", color: "#26354D" }} /> Spoken English</p>
                          <p><FaCode style={{ fontSize: "25px", color: "#26354D" }} /> Web Design/Programming</p>
                          <p><FaTools style={{ fontSize: "25px", color: "#26354D" }} /> Govt. Skill Development Programmes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProgram;
