import React from "react";
import "../../Components/Website/assets/css/our_programs.css";
import { Link } from "react-router-dom";
import { FaUniversity, FaFlask, FaBalanceScale, FaChalkboardTeacher, FaDumbbell, FaLaptopCode, FaGavel, FaBookOpen, FaUserGraduate, FaGraduationCap } from 'react-icons/fa';
import { MdScience, MdAgriculture, MdLocalPharmacy } from 'react-icons/md';
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaPaintBrush, FaChartLine } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import { FaCapsules, FaTools } from 'react-icons/fa';
import { GiElectric, GiSewingNeedle, GiGearStickPattern } from 'react-icons/gi';
import { MdMemory } from 'react-icons/md';
function OurProgram() {
   return (
      <>
         <section className="py-5 our-program-section" id="main-content" style={{ backgroundColor: "#f5f5f5" }} >
            <div className="container doz-our-con" data-aos="fade-up" data-aos-delay="200">
               <div className="container">
                  <h2 className="section-heading mb-2">Our Programs</h2>
                  <p className="mb-0">Empowering Students Across Every Discipline </p>
                  <div className="row">
                     <div className="col-md-12">
                        <ul className="nav nav-pills doz-ul-sec mb-3" id="pills-tab" role="tablist">
                           <li className="nav-item mb-0 " role="presentation">
                              <button className="nav-link active" id="pills-ug-tab" data-bs-toggle="pill" data-bs-target="#pills-ug" type="button" role="tab"
                                 aria-controls="pills-ug" aria-selected="true" >
                                 <FaGraduationCap className="nav-icon" />
                                 Undergraduate Programs
                              </button>
                           </li>
                           <li className="nav-item mb-0" role="presentation">
                              <button className="nav-link" id="pills-pg-tab" data-bs-toggle="pill" data-bs-target="#pills-pg" type="button" role="tab"
                                 aria-controls="pills-pg" aria-selected="false">
                                 <FaUserGraduate className="nav-icon" />
                                 Postgraduate Programs
                              </button>
                           </li>
                           <li className="nav-item mb-0" role="presentation">
                              <button className="nav-link" id="pills-diploma-tab" data-bs-toggle="pill" data-bs-target="#pills-diploma" type="button"
                                 role="tab" aria-controls="pills-diploma" aria-selected="false">
                                 <HiOutlineDocumentText className="nav-icon" />
                                 Diploma Programs
                              </button>
                           </li>
                           </ul>
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-ug" role="tabpanel" aria-labelledby="pills-ug-tab" tabindex="0">
                              <div className="col-12">
                                 <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to="/bachelor-of-arts">
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec1">
                                                <FaBookOpen style={{ fontSize: "20px", color: "#1E88E5", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Arts (B.A.)</h5>
                                             <p>3 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                      <Link to={'/bachelor-of-science'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec2">
                                                <MdScience style={{ fontSize: "20px", color: "#388E3C", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Science (B.Sc.) </h5>
                                             <p>3 years </p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/bachelor-of-commerce'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec3">
                                                <FaUniversity style={{ fontSize: "20px", color: "#6D4C41", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Commerce (B.Com.) </h5>
                                             <p>3 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                      <Link to={'/bca-applications'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec4">
                                                <FaLaptopCode style={{ fontSize: "20px", color: "#00838F", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Computer Applications (B.C.A.)</h5>
                                             <p>3 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/bsc-biotech'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec5">
                                                <FaFlask style={{ fontSize: "20px", color: "#8E24AA", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Science in Biotechnology (B.Sc. Biotech.) </h5>
                                             <p>3 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <Link to={'/bsc-agriculture'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec6">
                                                <MdAgriculture style={{ fontSize: "20px", color: "#558B2F", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Science in Agriculture (B.Sc. Agri) </h5>
                                             <p>4 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/bachelor-of-laws'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec7">
                                                <FaGavel style={{ fontSize: "20px", color: "#C62828", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Laws (LLB) </h5>
                                             <p> 3 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/bachelor-of-education'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec8">
                                                <FaChalkboardTeacher style={{ fontSize: "20px", color: "#0277BD", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Education (B.Ed.)</h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/bachelor-of-BPEd'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec9">
                                                <FaDumbbell style={{ fontSize: "20px", color: "#F57C00", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head"> Bachelor of Physical Education (B.P.Ed.)</h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/b-pharma'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-ico-sec10">
                                               <MdLocalPharmacy style={{ fontSize: "20px", color: "#6A1B9A", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Bachelor of Pharmacy (B.Pharm) </h5>
                                             <p>4 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="pills-pg" role="tabpanel" aria-labelledby="pills-agriculture-tab" tabindex="0" >
                              <div className="col-12">
                                 <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/master-of-arts'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icoback1">
                                                <FaPaintBrush style={{ fontSize: "20px", color: "#ffffff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Master of Arts (M.A.) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/master-of-science'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icoback2">
                                                <FaFlask style={{ fontSize: "20px", color: "#ffffff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Master of Science (M.Sc.) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/master-of-commerce'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icoback3">
                                                 <FaChartLine style={{ fontSize: "20px", color: "#ffffff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Master of Commerce (M.Com.) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/msc-agriculture'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icoback4">
                                                <GiWheat style={{ fontSize: "20px", color: "#ffffff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Master of Science in Agriculture (M.Sc. Agri.) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="pills-diploma" role="tabpanel" aria-labelledby="pills-diploma-tab" tabindex="0" >
                              <div className="col-12">
                                 <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/BTC-education'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon1 doz-PG">
                                                <FaChalkboardTeacher style={{ fontSize: "20px", color: "#ffffff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Diploma in Elementary Education (D.El.Ed. / BTC) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/D-pharma'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon2 doz-PG">
                                                <FaCapsules style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">Diploma in Pharmacy (D.Pharm) </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/ITI-electrician'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon3 doz-PG">
                                                <GiElectric style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">ITI – Electrician </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/ITI-fitter'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon4 doz-PG">
                                                <FaTools style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">ITI – Fitter</h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/ITI-electronics-mechanic'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon5 doz-PG">
                                                <MdMemory style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">ITI – Electronics Mechanic </h5>
                                             <p>2 years</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/ITI-dress-making'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon6 doz-PG">
                                                <GiSewingNeedle style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">ITI – Dress Making </h5>
                                             <p>1 year</p>
                                          </div>
                                       </div>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                       <Link to={'/ITI-diesel-mechanic'}>
                                       <div className="card doz-our-car">
                                          <div className="card-body">
                                             <div className="doz-our-icon7 doz-PG">
                                                <GiGearStickPattern style={{ fontSize: "20px", color: "#fff", flexShrink: "0" }} />
                                             </div>
                                             <h5 className="doz-our-head">ITI – Diesel Mechanic </h5>
                                             <p>1 year</p>
                                          </div>
                                       </div>
                                       </Link>
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
