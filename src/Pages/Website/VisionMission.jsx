  import React from "react";
  import '../../Components/Website/assets/css/about-us.css';
  import mImg from '../../Components/Website/assets/images/logo/target.png';
  import vImg from '../../Components/Website/assets/images/logo/shared-vision.png';
import Breadcrum from "../../Components/Website/breadcrum";
import Footer from "../../Components/Website/Footer";
  function MissionVision() {
   return (
     <>
       <Breadcrum paths={[
              { label: 'Home', link: '/' },
              { label: 'Vision & Mission', link: `/vision-mission` },
            ]} />
       <section className="py-5" id="main-content">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 border-end doz-about-col" data-aos="fade-up" data-aos-delay="200">
                         <div className=" doz-mission-content">
                              <h3 className="mb-0">Mission</h3>
                              <p>To create skilled pharmacy professionals through experienced faculty, strong infrastructure, and research facilities; 
                                  to promote research and development with social responsibility for community pharmacy; to enhance students’ 
                                  skills through creative learning, practical exposure, and training with well-equipped laboratories as per industry
                                   requirements.</p>
                                   <div className="doz-about-img">
                                       <img src={mImg}/>
                                   </div>
                         </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 doz-about-col" data-aos="fade-up" data-aos-delay="300">
                         <div className="doz-vision-content">
                              <h3 className="mb-0">Vision</h3>
                              <p>To provide the best quality education, innovative research, and development of skilled pharmacy professionals as per
                               industrial market needs, contributing to a healthy society.</p> 
                               <div className="doz-about-img">
                                   <img src={vImg}/>
                               </div>
                         </div>
                      </div>
                  </div>
              </div>
           </section>
     <Footer/>
     </>
     );
}

export default MissionVision;