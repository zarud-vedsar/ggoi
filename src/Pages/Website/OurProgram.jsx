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
                <ul className="nav nav-pills mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-ug-tab" data-bs-toggle="pill" data-bs-target="#pills-ug" type="button"
                      role="tab" aria-controls="pills-ug" aria-selected="true">
                      Undergraduate Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-pg-tab" data-bs-toggle="pill" data-bs-target="#pills-pg" type="button"
                      role="tab" aria-controls="pills-pg" aria-selected="false">
                      Postgraduate Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-pg-diploma-tab" data-bs-toggle="pill" data-bs-target="#pills-pg-diploma" type="button"
                      role="tab" aria-controls="pills-pg-diploma" aria-selected="false">
                      PG Diploma Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-diploma-tab" data-bs-toggle="pill" data-bs-target="#pills-diploma" type="button"
                      role="tab" aria-controls="pills-diploma" aria-selected="false">
                      Diploma Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-certificate-tab" data-bs-toggle="pill" data-bs-target="#pills-certificate" type="button"
                      role="tab" aria-controls="pills-certificate" aria-selected="false">
                      Certificate Programs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-awareness-tab" data-bs-toggle="pill" data-bs-target="#pills-awareness" type="button"
                      role="tab" aria-controls="pills-awareness" aria-selected="false">
                      Awareness Programs
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-ug" role="tabpanel" aria-labelledby="pills-ug-tab" tabindex="0">
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="course-list">
                          <p><FaPenFancy style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.A. – Hindi, Sanskrit, English,

                            B.A. – History, Geography, Political Science, Public Administration,

                            B.A. – Economics, Education, Sociology, Philosophy,

                            B.A. – Home Science, Social Work,

                            B.A. – Fashion Designing, Textile Designing , B.A./B.Sc. – Mathematics, Statistics,B.A. – Yoga</p>

                          <p><GiPlantRoots style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.A. (Single Subject) – Annual, all subjects</p>

                          <p><GiCalculator style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.Sc. – Chemistry, Zoology, Botany, Physics, Mathematics</p>

                          <p><FaBookOpen style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.Sc. (Single Subject) – Annual, all subjects</p>

                          <p><FaRupeeSign style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.Com – Bachelor of Commerce</p>

                          <p><FaLaptopCode style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> BCA – Bachelor of Computer Applications</p>

                          <p><MdBusinessCenter style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> BBA – Bachelor of Business Administration</p>

                          <p><FaBook style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> BLIS – Bachelor of Library and Information Science</p>

                          <p><FaChalkboardTeacher style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> B.Ed – Bachelor of Education</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-pg" role="tabpanel" aria-labelledby="pills-agriculture-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="pg-course-list">
                          <p><FaPenFancy style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> M.A. – Hindi, Sanskrit, English, History, Economics, Geography, Home Science, Political Science, Sociology, Education, Philosophy, Social Work, Yoga, Statistics</p>

                          <p><FaAtom style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> M.Sc. – Chemistry, Zoology, Botany, Physics, Mathematics</p>

                          <p><FaMicroscope style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> M.Sc. (Specializations) – Biochemistry, Statistics, Computer Science, Food & Nutrition</p>

                          <p><FaRupeeSign style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> M.Com</p>

                          <p><MdBusinessCenter style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> MBA – Master of Business Administration</p>

                          <p><FaLaptopCode style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> MCA – Master of Computer Application</p>

                          <p><FaBookOpen style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> MLIS – Master of Library and Information Science</p>

                          <p><FaNewspaper style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> MJ – Master of Journalism</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-pg-diploma" role="tabpanel" aria-labelledby="pills-pg-diploma-tab" tabindex="0" >
                    <div className="card doz-our-card">
                      <div className="card-body">
                        <div className="agriculture-course-list">
                          <p><FaSeedling style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Agriculture Extension (PGDAE)</p>
                          <p><FaLanguage style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Translation (PGDT)</p>
                          <p><FaPenFancy style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Creative Writing in Hindi (PGDCWH)</p>
                          <p><FaUserGraduate style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Educational Administration (PGDEA)</p>
                          <p><FaRecycle style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Environment and Sustainable Development (PGD-ESD)</p>
                          <p><FaVideo style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Electronic Media Management and Film Production (PGDEM&FP)</p>
                          <p><FaUserTie style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Vocational Guidance and Career Counselling (PGDVGCC)</p>
                          <p><FaSchool style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Distance Education (PGDDE)</p>
                          <p><FaLanguage style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Functional Hindi (PGDFH)</p>
                          <p><FaNewspaper style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Rural Journalism and Mass Communication (PGDRJMC)</p>
                          <p><FaGlobeAmericas style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Green Social Work (PGDGSW)</p>
                          <p><FaChartBar style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Bio-Statistics and Demography (PGDBSD)</p>
                          <p><FaBroadcastTower style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Journalism and Mass Communication (PGDJMC)</p>
                          <p><FaRupeeSign style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Financial Management (PGDFM)</p>
                          <p><FaBullhorn style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Marketing Management (PGDMM)</p>
                          <p><FaIndustry style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Production Management (PGDPM)</p>
                          <p><FaPeopleCarry style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Human Resource Development (PGDHRD)</p>
                          <p><FaChartBar style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Bio-Statistics and Population Studies (PGDBSPS)</p>
                          <p><FaAppleAlt style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Dietetics and Therapeutic Nutrition (PGDDTN)</p>
                          <p><FaHospital style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Hospital and Public Health Management (PGDHHM)</p>
                          <p><FaOm style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Spiritual Tourism (PGDST)</p>
                          <p><FaSpa style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Yoga (PGDYO)</p>
                          <p><FaShieldAlt style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Food Safety and Nutritional Quality Management (PGDFSQM)</p>
                          <p><FaLandmark style={{ fontSize: "25px", color: "#26354D" ,flexShrink:"0"}} /> PG Diploma in Museology (PGDM)</p>
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
