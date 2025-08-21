   import React from "react";
   import Footer from '../../../Components/Website/Footer';
   import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
  import { 
  FaFeatherAlt, 
  FaUniversity, 
  FaBalanceScale, 
  FaRegLightbulb, 
  FaUsers 
} from "react-icons/fa";
  
   function MasterOfArts() {
      return (
         <>

    <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className=" text-center doz-arts">Master of Arts (M.A.)</h1>
                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Master of Arts (M.A.) is a <strong>two-year postgraduate degree</strong> in the humanities and social sciences that develops advanced understanding of literature, language, history, politics, and philosophy. 
                    At Ghanshyam Group, the program is offered in disciplines like <strong>Hindi, English, Sanskrit, History, and Political Science</strong>, enabling students to deepen their academic and research skills. 
                    The curriculum fosters <strong>intellectual growth and independent research</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum covers diverse areas of humanities and social sciences with strong emphasis on research and critical thinking.</p>

                  <h6 className="doz-st-para mb-0"><FaFeatherAlt size={22} color="#095287" />&nbsp; Languages & Literature:</h6>
                  <p className="doz-hse-text">Advanced poetry, drama, prose, and literary criticism in Hindi, English, or Sanskrit.</p>

                  <h6 className="doz-st-para mb-0"><FaUniversity size={22} color="#095287" />&nbsp; History:</h6>
                  <p className="doz-hse-text">Historiography, cultural history, freedom movements, and world civilizations.</p>

                  <h6 className="doz-st-para mb-0"><FaBalanceScale size={22} color="#095287" />&nbsp; Political Science:</h6>
                  <p className="doz-hse-text">Political thought, Indian politics, international relations, diplomacy, and governance models.</p>

                  <h6 className="doz-st-para mb-0"><FaRegLightbulb size={22} color="#095287" />&nbsp; Research Work:</h6>
                  <p className="doz-hse-text">Dissertation, seminars, paper presentations, and methodology training.</p>

                  <h6 className="doz-st-para mb-0"><FaUsers size={22} color="#095287" />&nbsp; Electives:</h6>
                  <p className="doz-hse-text">Cultural studies, linguistics, public administration, and contemporary socio-political issues.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students develop <strong>analytical writing, academic research, critical interpretation, communication, and debating skills</strong>. 
                      The program also builds <strong>presentation techniques, teaching methodologies, and policy analysis expertise</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Graduates can work as <strong>lecturers, researchers, translators, journalists, civil service officers, policy analysts, NGO professionals, or authors</strong>. 
                      It also opens pathways for <strong>NET/JRF, Ph.D., and higher education abroad</strong>.
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

export default MasterOfArts;