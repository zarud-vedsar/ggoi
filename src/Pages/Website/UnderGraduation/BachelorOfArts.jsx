 import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';

import { FaBookOpen } from 'react-icons/fa';
import { GiScrollQuill } from 'react-icons/gi';
import { FaFeatherAlt, FaBook, FaTheaterMasks } from 'react-icons/fa';
import { MdOutlineNewspaper } from 'react-icons/md';
import { BiTransferAlt } from 'react-icons/bi';
import { HiOutlineLanguage } from "react-icons/hi2";
 
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
                                 <h2 className="mb-3">Bachelor of Arts (B.A.) Program </h2>
                                <p className="ba-hse-para">The <strong>Bachelor of Arts (B.A.)</strong> at Ghanshyam Group of Institutions is a <strong>three-year 
                                    undergraduate program</strong> designed to give students a solid foundation in humanities and 
                                    social sciences. The course nurtures <strong>critical thinking, creativity, communication skills, 
                                    cultural awareness, and analytical abilities.</strong> </p>
                                <p className="ba-hse-para">Students can choose specializations such as <strong>Hindi, Sanskrit, and English,</strong> each offering 
                                unique perspectives and career opportunities. </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <FaBookOpen size={28} color="#08568B" />
                            <h3 className="mb-3">Specializations Offered</h3> 
                        </div>
                        <div className="ba-hse-content">
                           <h4 className="doz-hse-head">B.A. in Hindi </h4>
                            <h5>Overview: </h5>
                            <p className="doz-hse-para">The B.A. Hindi program is ideal for students passionate about <strong>Indian literature, 
                               language, and cultural heritage </strong>. The course explores classical and modern Hindi 
                               poetry, drama, novels, grammar, and literary criticism. Students also learn how Hindi 
                               has evolved as the link language of India, connecting diverse communities. </p>

                               <h6 className="ba-hse-head">What You Will Study: </h6>
                               <p className="doz-hse-text"><span className="pe-2"> <GiScrollQuill size={20} color="#08568B"/></span> Ancient & Medieval Hindi Literature (Bhakti & Riti Kavya) </p>
                               <p className="doz-hse-text"><span className="pe-2"><FaFeatherAlt size={20} color="#08568B"/></span>Modern Prose, Poetry, and Drama </p>
                               <p className="doz-hse-text"><span className="pe-2"><MdOutlineNewspaper size={20} color="#08568B"/></span>Hindi Journalism and Mass Communication </p>
                               <p className="doz-hse-text"><span className="pe-2"><BiTransferAlt size={20} color="#08568B"/></span>Functional Hindi & Translation Studies </p>
                               <p className="doz-hse-text"><span className="pe-2"><HiOutlineLanguage size={20} color="#08568B"/></span>Linguistics and Grammar </p>
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