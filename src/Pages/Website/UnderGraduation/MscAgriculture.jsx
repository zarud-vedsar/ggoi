  import React from "react";
      import Footer from '../../../Components/Website/Footer';
      import '../../../Components/Website/assets/css/bachelor-of-arts.css';
      import { 
  FaSeedling, 
  FaWater, 
  FaDna, 
  FaBug, 
  FaTractor 
} from "react-icons/fa";
       
      function MscAgri() {
         return (
            <>

     <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-5 text-center doz-arts">Master of Science in Agriculture (M.Sc. Ag)</h1>
                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Master of Science in Agriculture (M.Sc. Ag) is a <strong>two-year postgraduate program</strong> 
                    that deepens expertise in <strong>agricultural sciences</strong>. It emphasizes <strong>research, innovation, and sustainable farming techniques</strong> 
                    to address global challenges such as <strong>food security, climate change, and rural development</strong>. 
                    At Ghanshyam Group, this course prepares students for both <strong>academic and applied agricultural careers</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum blends modern research with practical agricultural practices to ensure sustainable rural development.</p>

                  <h6 className="doz-st-para mb-0"><FaSeedling size={22} color="#095287" />&nbsp; Crop Science & Agronomy:</h6>
                  <p className="doz-hse-text">Advanced study of crop physiology, seed technology, and sustainable farming.</p>

                  <h6 className="doz-st-para mb-0"><FaWater size={22} color="#095287" />&nbsp; Soil Science & Fertility Management:</h6>
                  <p className="doz-hse-text">Soil health, irrigation systems, and fertility control.</p>

                  <h6 className="doz-st-para mb-0"><FaDna size={22} color="#095287" />&nbsp; Plant Breeding & Biotechnology:</h6>
                  <p className="doz-hse-text">Genetic improvement, hybridization, and agri-biotechnology.</p>

                  <h6 className="doz-st-para mb-0"><FaBug size={22} color="#095287" />&nbsp; Pest & Disease Management:</h6>
                  <p className="doz-hse-text">Integrated pest control, plant pathology, and agrochemicals.</p>

                  <h6 className="doz-st-para mb-0"><FaTractor size={22} color="#095287" />&nbsp; Agricultural Economics & Extension:</h6>
                  <p className="doz-hse-text">Rural development, agri-business management, and policy studies.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students gain <strong>field research expertise, data analysis, innovative farming practices, scientific problem-solving, and agribusiness management skills</strong>. 
                      They also become capable of handling <strong>large-scale rural projects</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      M.Sc. Ag graduates can work as <strong>agricultural scientists, researchers, consultants, farm managers, government officers, NGO professionals, or lecturers</strong>. 
                      The program also opens pathways to <strong>Ph.D. in Agriculture and international research projects</strong>.
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

export default MscAgri;