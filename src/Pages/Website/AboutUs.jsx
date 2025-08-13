 import React from "react";
 import '../../Components/Website/assets/css/about-us.css';
 import ggoImg from '../../Components/Website/assets/images/logo/ggoi-image.jpg';
 import mImg from '../../Components/Website/assets/images/logo/target.png';
 import vImg from '../../Components/Website/assets/images/logo/shared-vision.png';
 function AboutUs() {
  return (
    <>
     
      <section className="py-5 our-program-section" id="our-programs" style={{backgroundColor:"#f5f5f5"}}>
        <div className="container doz-our-con">
          <div className="container">
              <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-6 col-12 mb-3">
                      <h2 className="section-heading mb-2 doz-about-head">About Ghanshyam<br/> Group of Institutions</h2>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-6 col-12 mb-4 doz-about-para">
                      <p>For over 22 years, the Ghanshyam Group of Institutions, under the Urvashi Ghanshyam Technological Research and
                        Development Charitable Trust, has been dedicated to excellence in education. Founded in 2000 on the Prayagraj–Varanasi
                        Road, the Trust has grown into a network of over 12 schools and colleges. Guided by visionary leadership, an experienced
                         Board of Governors, and exceptional faculty, the institutions have nurtured bright, talented students who bring pride 
                         to the group. Committed to quality learning and holistic growth, the Trust works toward building a democratic,
                          pluralistic, and secular nation—transforming education into a movement for complete illumination.</p>
                  </div>
                  <div className="col-12 mb-3">
                      <div className="">
                          <img src={ggoImg}/>
                      </div>
                  </div>
                  <div className="col-12">
                     <div className="">
                        <p>Over the past twenty-two years, the Ghanshyam Group of Institutions has nurtured a galaxy of educated students who have 
                            brought pride and honor to the institution.</p>

                        <p>The Urvashi Ghanshyam Technological Research and Development Charitable Trust came into existence as a non-profit organization.
                         It established its first institution in 2000 on the Prayagraj–Varanasi Road, Uttar Pradesh.</p>

                        <p>Today, the Trust has grown into a family of more than twelve schools and colleges. Each college has evolved with a well-designed 
                         educational program based on the pursuit and promotion of excellence.</p>

                         <p>Several factors have played a vital role in building this symbol of quality education: the vision and foresight of the pioneers,
                        the wholehearted involvement and professional commitment of the serving Board of Governors towards the cause of education, 
                        the appointment of outstanding teachers to guide each school/college in the right direction, an unmatched faculty, and finally, 
                        the selection of meritorious and bright students. These hallmarks have kept the Urvashi Ghanshyam Technological Research and
                         Development Charitable Trust at the forefront of the educational sphere.</p>

                        <p>As the saying goes, “It’s good to have an end to the journey, but it’s the journey itself that matters in the end.” The Trust’s
                         involvement in universal educational growth and its efforts to build a democratic, pluralistic, and secular nation have made 
                         all the difference. It is no longer about lighting a candle here or there; it is a commitment to achieving complete illumination.</p>
                     </div>
                  </div>
              </div>
           </div>
        </div> 
     </section> 

     <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 border-end doz-about-col">
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
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 doz-about-col">
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
    
    
    </>
      );
}

export default AboutUs;