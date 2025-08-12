import React from "react";
import "../../Components/Website/assets/css/our_programs.css";
import { FaUniversity, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

import { FaMortarPestle } from 'react-icons/fa';
import { FaBolt, FaWrench, FaTools, FaScrewdriver, FaRobot } from 'react-icons/fa';
import { FaKeyboard, FaShoppingCart, FaTractor, FaBriefcase } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import { FaPenFancy } from "react-icons/fa";

import { FaMoneyBillWave } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { GiCalculator } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { FaFlaskVial } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { MdBusinessCenter } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import {
  FaPills, FaIndustry, FaHeartbeat, FaSeedling, FaBalanceScale, FaChild, FaFemale,
  FaCameraRetro, FaHome, FaLanguage, FaSpa, FaGlobe, FaLaptopCode, FaFlask
} from 'react-icons/fa';
import { GiFruitBowl, GiClothes, GiRolledCloth, GiMilkCarton } from 'react-icons/gi';
import {
  FaHorseHead, FaAppleAlt,
  FaRecycle
} from 'react-icons/fa';
import {
  FaGavel, FaEye, FaHandsHelping,
  FaUsers, FaChartLine, FaLandmark, FaFlag, FaVirus
} from 'react-icons/fa';
import {
  FaUserGraduate, FaVideo,
  FaUserTie, FaSchool, FaGlobeAmericas,
  FaChartBar, FaBroadcastTower, FaRupeeSign, FaBullhorn,
  FaPeopleCarry, FaHospital, FaOm, FaShieldAlt,

} from 'react-icons/fa';
import {
  FaAtom, FaMicroscope
} from 'react-icons/fa';
import {

  FaGlobeAsia, FaBalanceScaleLeft
} from 'react-icons/fa';
import {
  GiTeacher, GiNotebook,
  GiDiscussion, GiTShirt
} from 'react-icons/gi';
import { GiLotus } from 'react-icons/gi';

import { MdDesignServices } from 'react-icons/md';
import { PiTextAaBold } from 'react-icons/pi';
import { FaGraduationCap } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaMedal } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
function OurProgram() {
  return (
    <>
      <section className="py-5 our-program-section" style={{backgroundColor:"#f5f5f5"}}>
        <div className="container doz-our-con">
          <h2 className="section-heading">Our Programs</h2>
          <p>Empowering Students Across Every Discipline </p>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills doz-ul-sec mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
                  <li className="nav-item mb-0 " role="presentation">
                    <button className="nav-link active" id="pills-ug-tab" data-bs-toggle="pill" data-bs-target="#pills-ug" type="button"
                      role="tab" aria-controls="pills-ug" aria-selected="true">
                      <FaGraduationCap style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px' }} />
                       Undergraduate Programs
                    </button>
                  </li>
                  <li className="nav-item mb-0" role="presentation">
                    <button className="nav-link" id="pills-pg-tab" data-bs-toggle="pill" data-bs-target="#pills-pg" type="button"
                      role="tab" aria-controls="pills-pg" aria-selected="false">
                         <FaUserGraduate style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px'}} />
                         Postgraduate Programs
                    </button>
                  </li>
                  <li className="nav-item mb-0" role="presentation">
                    <button className="nav-link" id="pills-pg-diploma-tab" data-bs-toggle="pill" data-bs-target="#pills-pg-diploma" type="button"
                      role="tab" aria-controls="pills-pg-diploma" aria-selected="false">
                        <FaCertificate style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px'}} />
                         PG Diploma Programs
                    </button>
                  </li>
                  <li className="nav-item mb-0" role="presentation">
                    <button className="nav-link" id="pills-diploma-tab" data-bs-toggle="pill" data-bs-target="#pills-diploma" type="button"
                      role="tab" aria-controls="pills-diploma" aria-selected="false">
                        <HiOutlineDocumentText style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px'}} />
                         Diploma Programs
                    </button>
                  </li>
                  <li className="nav-item mb-0" role="presentation">
                    <button className="nav-link" id="pills-certificate-tab" data-bs-toggle="pill" data-bs-target="#pills-certificate" type="button"
                      role="tab" aria-controls="pills-certificate" aria-selected="false">
                        <FaMedal style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px'}} />
                         Certificate Programs
                    </button>
                  </li>
                  <li className="nav-item mb-0s" role="presentation">
                    <button className="nav-link" id="pills-awareness-tab" data-bs-toggle="pill" data-bs-target="#pills-awareness" type="button"
                      role="tab" aria-controls="pills-awareness" aria-selected="false">
                        <FaLightbulb style={{ marginRight: '2px', color: '#313131ff', fontSize: '20px' }} />
                         Awareness Programs
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-ug" role="tabpanel" aria-labelledby="pills-ug-tab" tabindex="0">
                  <div className="col-12">
                     <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec1">
                                <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A.</h5>
                                  <p>Hindi, Sanskrit, English</p>
                              </div>
                          </div>
                       </div> 
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec2">
                                <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A.</h5>
                                  <p>History, Geography, Political Science, Public Administration</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec3">
                                <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A.</h5>
                                  <p>Economics, Education, Sociology, Philosophy</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec4">
                                <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A.</h5>
                                  <p>Home Science, Social Work</p>
                              </div>
                          </div>
                       </div> 
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec4">
                                <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A.</h5>
                                  <p>Fashion Designing, Textile Designing , B.A./B.Sc. – Mathematics, Statistics,B.A. – Yoga</p>
                              </div>
                          </div>
                       </div>  
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec5">
                                <GiPlantRoots style={{ fontSize: "20px", color: "#1b5e20" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.A. (Single Subject)</h5>
                                  <p>Annual, all subjects</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec6">
                                <GiCalculator style={{ fontSize: "20px", color: "#d84315" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head"> B.Sc.</h5>
                                  <p>Chemistry, Zoology, Botany, Physics, Mathematics</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec7">
                                <FaBookOpen style={{ fontSize: "20px", color: "#6a1b9a" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head"> B.Sc. (Single Subject)</h5>
                                  <p>Annual, all subjects</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec8">
                                <FaRupeeSign style={{ fontSize: "20px", color: "#00695c" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.Com</h5>
                                  <p>Bachelor of Commerce</p>
                              </div>
                          </div>
                       </div> 
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec9">
                                <FaLaptopCode style={{ fontSize: "20px", color: "#0d47a1" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">BCA</h5>
                                  <p>Bachelor of Computer Applications</p>
                              </div>
                          </div>
                       </div> 
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec10">
                                <MdBusinessCenter style={{ fontSize: "20px", color: "#4e342e" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">BBA</h5>
                                  <p>Bachelor of Business Administration</p>
                              </div>
                          </div>
                       </div>  
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec11">
                                <FaBook style={{ fontSize: "20px", color: "#2e7d32" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head"> BLIS</h5>
                                  <p>Bachelor of Library and Information Science</p>
                              </div>
                          </div>
                       </div>  
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                              <div className="card-body">
                                <div className="doz-our-ico-sec12">
                                <FaChalkboardTeacher style={{ fontSize: "20px", color: "#9e9d24" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">B.Ed</h5>
                                  <p>Bachelor of Education</p>
                              </div>
                          </div>
                       </div> 
                     </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-pg" role="tabpanel" aria-labelledby="pills-agriculture-tab" tabindex="0" >
                   <div className="col-12">
                     <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback1">
                                   <FaPenFancy style={{ fontSize: "20px", color: "#223872" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">M.A.</h5>
                                  <p>Hindi, Sanskrit, English, History, Economics, Geography, Home Science, Political Science, Sociology, Education, Philosophy, Social Work, Yoga, Statistics</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback2">
                                   <FaAtom style={{ fontSize: "20px", color: "#1565c0" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">M.Sc.</h5>
                                  <p>Chemistry, Zoology, Botany, Physics, Mathematics</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback3">
                                    <FaMicroscope style={{ fontSize: "20px", color: "#4e342e" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">M.Sc. (Specializations)</h5>
                                  <p>Biochemistry, Statistics, Computer Science, Food & Nutrition</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback4">
                                   <FaRupeeSign style={{ fontSize: "20px", color: "#00695c" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">M.Com</h5>
                                  <p></p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback5">
                                    <MdBusinessCenter style={{ fontSize: "20px", color: "#6a1b9a" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">MBA</h5>
                                  <p>Master of Business Administration</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback6">
                                   <FaLaptopCode style={{ fontSize: "20px", color: "#0d47a1" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">MCA</h5>
                                  <p>Master of Computer Application</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback7">
                                   <FaBookOpen style={{ fontSize: "20px", color: "#2e7d32" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">MLIS</h5>
                                  <p>Master of Library and Information Science</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-icoback8">
                                   <FaNewspaper style={{ fontSize: "20px", color: "#c62828" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">MJ</h5>
                                  <p>Master of Journalism</p>
                              </div>
                          </div>
                       </div>
                   </div>
                </div>
              </div>
                  <div className="tab-pane fade" id="pills-pg-diploma" role="tabpanel" aria-labelledby="pills-pg-diploma-tab" tabindex="0" >
                    <div className="col-12">
                     <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro1 doz-PG">
                                    <FaSeedling style={{ fontSize: "20px", color: "#2e7d32" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Agriculter Extension (PGDAE)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro2 doz-PG">
                                   <FaLanguage style={{ fontSize: "20px", color: "#1565c0" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Translation (PGDT)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro3 doz-PG">
                                    <FaPenFancy style={{ fontSize: "20px", color: "#512da8" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Creative Writing in Hindi (PGDCWH)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro4 doz-PG">
                                   <FaUserGraduate style={{ fontSize: "20px", color: "#c2185b" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Educational Administration (PGDEA)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro5 doz-PG">
                                    <FaRecycle style={{ fontSize: "20px", color: "#689f38" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Environment and Sustainable Development (PGD-ESD)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro6 doz-PG">
                                    <FaVideo style={{ fontSize: "20px", color: "#fbc02d" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Electronic Media Management and Film Production (PGDEM&FP)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro7 doz-PG">
                                  <FaUserTie style={{ fontSize: "20px", color: "#6a1b9a" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Vocational Guidance and Career Counselling (PGDVGCC)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro8 doz-PG">
                                   <FaSchool style={{ fontSize: "20px", color: "#8e24aa" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Distance Education (PGDDE)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro9 doz-PG">
                                  <FaLanguage style={{ fontSize: "20px", color: "#0288d1" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Functional Hindi (PGDFH)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro10 doz-PG">
                                    <FaNewspaper style={{ fontSize: "20px", color: "#d84315" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Rural Journalism and Mass Communication (PGDRJMC)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro11 doz-PG">
                                     <FaGlobeAmericas style={{ fontSize: "20px", color: "#3949ab" ,flexShrink:"0"}} />
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Green Social Work (PGDGSW)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro12 doz-PG">
                                   <FaChartBar style={{ fontSize: "20px", color: "#ef6c00" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Bio-Statistics and Demography (PGDBSD)</p>
                              </div>
                          </div>
                       </div>
                         <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro13 doz-PG">
                                   <FaBroadcastTower style={{ fontSize: "20px", color: "#5e35b1" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Journalism and Mass Communication (PGDJMC)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro14 doz-PG">
                                   <FaRupeeSign style={{ fontSize: "20px", color: "#00838f" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Financial Management (PGDFM)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro15 doz-PG">
                                   <FaBullhorn style={{ fontSize: "20px", color: "#c2185b" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Marketing Management (PGDMM)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro16 doz-PG">
                                  <FaIndustry style={{ fontSize: "20px", color: "#00695c" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Production Management (PGDPM)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro17 doz-PG">
                                    <FaPeopleCarry style={{ fontSize: "20px", color: "#558b2f" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Human Resource Development (PGDHRD)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro18 doz-PG">
                                  <FaChartBar style={{ fontSize: "20px", color: "#fdd835" ,flexShrink:"0"}} />   
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Bio-Statistics and Population Studies (PGDBSPS)</p>
                              </div>
                          </div>
                       </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro19 doz-PG">
                                   <FaAppleAlt style={{ fontSize: "20px", color: "#ad1457" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Dietetics and Therapeutic Nutrition (PGDDTN)</p>
                              </div>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro20 doz-PG">
                                   <FaHospital style={{ fontSize: "20px", color: "#1976d2" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Hospital and Public Health Management (PGDHHM)</p>
                              </div>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro21 doz-PG">
                                    <FaOm style={{ fontSize: "20px", color: "#ff6f00" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Spiritual Tourism (PGDST)</p>
                              </div>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro22 doz-PG">
                                    <FaSpa style={{ fontSize: "20px", color: "#ab47bc" ,flexShrink:"0"}} /> 
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p> Yoga (PGDYO)</p>
                              </div>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro23 doz-PG">
                                   <FaShieldAlt style={{ fontSize: "20px", color: "#4527a0" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Food Safety and Nutritional Quality Management (PGDFSQM)</p>
                              </div>
                          </div>
                       </div>
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="card doz-our-car">
                             <div className="card-body">
                                <div className="doz-our-backgro24 doz-PG">
                                   <FaLandmark style={{ fontSize: "20px", color: "#006064" ,flexShrink:"0"}} />  
                                </div>
                                 <h5 className="doz-our-head">PG Diploma</h5>
                                  <p>Museology (PGDM)</p>
                              </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
                  <div className="tab-pane fade" id="pills-diploma" role="tabpanel" aria-labelledby="pills-diploma-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="pharmacy-course-list">
                          <p><FaPills style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Agriculture (PAG)</p>
                          <p><FaIndustry style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Agri Business Management (DABAM)</p>
                          <p><FaHeartbeat style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Health Education and Nutrition (DHEN)</p>
                          <p><FaSeedling style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Rural Development (DRD)</p>
                          <p><GiFruitBowl style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Dietetics and Nutrition (DCDN)</p>
                          <p><FaChild style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Early Childhood Care and Education (DECE)</p>
                          <p><GiClothes style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Fashion Designing (DFD)</p>
                          <p><GiRolledCloth style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Textile Designing (DTD)</p>
                          <p><FaCameraRetro style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Photography (DIP)</p>
                          <p><FaHome style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Home Arts (DHA)</p>
                          <p><FaLanguage style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Urdu (DUR)</p>
                          <p><FaSpa style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Yoga (DYO)</p>
                          <p><FaLaptopCode style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Web Technology (DWT)</p>
                          <p><GiMilkCarton style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Diploma in Dairy Technology (DDT)</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-certificate" role="tabpanel" aria-labelledby="pills-certificate-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="iti-trades-list">
                          <p><FaBolt style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate Course in Single Subject – Arts (CCSS)</p>
                          <p><FaWrench style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate Course in Single Subject – Science (CCSSSC)</p>
                          <p><FaTools style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Post Harvest Technology and Value Addition (CPHT&VA)</p>
                          <p><FaLeaf style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Cultivation of Medicinal and Aromatic Plants (CCMAP)</p>
                          <p><FaHorseHead style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Livestock Production System (CLPS)</p>
                          <p><FaChild style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Child Care and Nutrition (CCCN)</p>
                          <p><FaAppleAlt style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Nutrition and Food (CNF)</p>
                          <p><FaBalanceScale style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Human Rights (CHR)</p>
                          <p><FaRecycle style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Environmental Studies (CES)</p>
                          <p><FaFemale style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Women Empowerment and Development (CWED)</p>
                          <p><FaSpa style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate Course in Yoga</p>
                          <p><FaNewspaper style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Certificate in Rural Journalism and Mass Communication (CRJMC)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-awareness" role="tabpanel" aria-labelledby="pills-pg-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="skill-courses-list">
                          <p><FaLaptopCode style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Panchayati Raj (APPR)</p>
                          <p><FaKeyboard style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Yoga (APY)</p>
                          <p><FaShoppingCart style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Dairy Farming (APDF)</p>
                          <p><FaChild style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Child Care and Nutrition (APCCN)</p>
                          <p><FaAppleAlt style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Child Nutrition and Food (APNF)</p>
                          <p><FaGavel style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Good Governance in New Delhi (APGGNI)</p>
                          <p><FaEye style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Kumbh Darshan (APKD)</p>
                          <p><FaHandsHelping style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on Antyodaya (APAY)</p>
                          <p><FaUsers style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on Ekatma Manavwad (APAM)</p>
                          <p><FaChartLine style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on Share Market and Mutual Funds</p>
                          <p><FaLandmark style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on Insurance and Banking Services</p>
                          <p><FaFlag style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on J&K (APJK)</p>
                          <p><FaUniversity style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme in Citizenship Amendment Act (CAA)</p>
                          <p><FaVirus style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> Awareness Programme on COVID-19 (APCO-19)</p>
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
