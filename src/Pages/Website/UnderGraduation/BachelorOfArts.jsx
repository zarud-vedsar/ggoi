 import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import { FaLanguage, FaGlobeAmericas, FaBalanceScale } from 'react-icons/fa';
import { GiAncientScroll, GiVote } from 'react-icons/gi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
 
 function BaHSE() {
   return (
      <>
      <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}> 
           <div className="container">
               <div className="row">
                  <div className="col-12">
                    <div className="ba-hse-card1">
                         <div className="card-body">
                            <div className="ba-hse-header">
                                 <h2 className="mb-0">Bachelor of Arts (B.A.)</h2>
                                  <h4 className="mb-0">Overview:</h4>
                                <p className="ba-hse-para">The Bachelor of Arts (B.A.) is a <strong>three-year undergraduate program</strong> designed to cultivate 
                                        broad intellectual and cultural perspectives through the study of humanities and social 
                                        sciences. At Ghanshyam Group of Institutions, the B.A. program offers a unique balance of 
                                        <strong>traditional knowledge and contemporary analysis</strong>, preparing students for both academic 
                                        advancement and diverse professional careers. Students can specialize in<strong> Hindi, Sanskrit, 
                                        English, History, Geography, Political Science, and Public Administration</strong>, each subject 
                                        adding depth to their understanding of language, culture, governance, and society. The B.A. 
                                        program is not just about classroom learning but also about encouraging students to develop 
                                        a <strong>critical and reflective mindset</strong> that enables them to become responsible citizens and 
                                        skilled professionals.  </p>

                                   <h5 className="mb-1 doz-what-head">Curriculum Highlights / What You Will Study: </h5>
                                   <p className="doz-hse-para">The program covers a wide range of disciplines that combine cultural appreciation with social awareness. </p>

                                   {/* <h6 className="doz-st-para mb-0"><FaLanguage />Languages (Hindi, English, Sanskrit):</h6> */}
                                   <p className="doz-hse-text"> Literature (poetry, prose, and drama), linguistics, literary criticism, and creative writing. </p>

                                   {/* <h6 className="doz-st-para"><GiAncientScroll />History:</h6> */}
                                   <p className="doz-hse-text"> Ancient, Medieval, and Modern Indian history; World history; Indian National Movement; Historiography. </p>

                                     {/* <h6 className="doz-st-para"><FaGlobeAmericas />Geography:</h6> */}
                                   <p className="doz-hse-text">Physical geography, climatology, economic geography, environmental studies, and regional planning. </p>

                                      {/* <h6 className="doz-st-para"><GiVote />Political Science: </h6> */}
                                   <p className="doz-hse-text"> Political theories, Indian constitution, governance, comparative politics, international relations, and diplomacy. </p>

                                       {/* <h6 className="doz-st-para"><MdOutlineAdminPanelSettings />Public Administration:</h6> */}
                                    <p className="doz-hse-text">Principles of administration, Indian administrative systems, public policy, ethics in governance, and development administration. </p>
                             </div>
                         </div>
                    </div>
                  </div>
               </div>
           </div>
      </section>
      
      <section className="py-5">
           <div className="container">
                <div className="row">
                       
                </div>
           </div>
      </section>

       <Footer />
      </>
       );
}

export default BaHSE;