  import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import { FaChartBar } from "react-icons/fa";
import { GiFarmTractor, GiGroundSprout, GiFlowerPot, GiBugNet } from "react-icons/gi";

  function BscAgriculture() {
    return (
       <>

       <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-3 text-center doz-arts">Bachelor of Science in Agriculture (B.Sc. Agri)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Science in Agriculture (B.Sc. Agri) is a <strong>four-year undergraduate program</strong> that combines agricultural sciences with modern technology. The course provides deep knowledge of <strong>crop production, soil science, irrigation, pest control, horticulture, and agri-business management</strong>. At Ghanshyam Group, the program is designed to address challenges such as <strong>food security, sustainability, and rural development</strong>.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The program blends agricultural science with hands-on techniques and sustainable practices.
              </p>

              <h6 className="doz-st-para mb-0"><GiFarmTractor size={24} color="#095287" />&nbsp; Crop Science & Agronomy:</h6>
              <p className="doz-hse-text">
                Crop science and agronomy, including sustainable farming techniques.
              </p>

              <h6 className="doz-st-para mb-0"><GiGroundSprout size={22} color="#095287" />&nbsp; Soil Science & Irrigation:</h6>
              <p className="doz-hse-text">
                Soil science, irrigation methods, and land resource management.
              </p>

              <h6 className="doz-st-para mb-0"><GiFlowerPot size={22} color="#095287" />&nbsp; Horticulture & Floriculture:</h6>
              <p className="doz-hse-text">
                Horticulture, floriculture, and greenhouse management.
              </p>

              <h6 className="doz-st-para mb-0"><FaChartBar size={22} color="#095287" />&nbsp; Agri-Economics & Business:</h6>
              <p className="doz-hse-text">
                Agricultural economics, rural development, and agri-business studies.
              </p>

              <h6 className="doz-st-para mb-0"><GiBugNet size={22} color="#095287" />&nbsp; Pest & Disease Management:</h6>
              <p className="doz-hse-text">
                Pest/disease management and use of biotechnology in agriculture.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students acquire <strong>scientific farming knowledge, problem-solving ability, fieldwork and research expertise, and agri-business management skills</strong>. They also gain the ability to <strong>adapt new technologies in agriculture and contribute to rural development</strong>.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can work as <strong>agriculture officers, scientists, farm managers, researchers, consultants, or entrepreneurs</strong> in the agri-business sector. They can also pursue higher studies like <strong>M.Sc. Agriculture or Ph.D.</strong> for advanced research roles.
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

export default BscAgriculture;