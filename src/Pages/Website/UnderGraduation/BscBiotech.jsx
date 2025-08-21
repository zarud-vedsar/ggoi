 import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
import {
  FaDna,
  FaMicroscope,
  FaVial,
  FaLeaf,
  FaCapsules,
  FaFlask
} from "react-icons/fa";

 function BscBiotech() {
    return (
       <>

   <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-3 text-center doz-arts">Bachelor of Science in Biotechnology (B.Sc. Biotech)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Science in Biotechnology (B.Sc. Biotech) is a <strong>three-year undergraduate program</strong> that blends biology and technology to create solutions for healthcare, agriculture, environment, and industry. At Ghanshyam Group of Institutions, this program is designed to provide students with <strong>in-depth theoretical knowledge and practical skills</strong> in molecular biology, genetics, biochemistry, and applied biotechnology. It prepares students for <strong>advanced research, higher education, or professional careers</strong> in diverse and fast-growing biotech sectors.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The curriculum blends core biological sciences with technological applications in real-world contexts.
              </p>

              <h6 className="doz-st-para mb-0"><FaDna size={22} color="#095287" />&nbsp; Molecular Biology & Genetics:</h6>
              <p className="doz-hse-text">
                DNA/RNA structure, replication, transcription, translation, gene regulation, and recombinant DNA technology.
              </p>

              <h6 className="doz-st-para mb-0"><FaMicroscope size={22} color="#095287" />&nbsp; Microbiology & Biochemistry:</h6>
              <p className="doz-hse-text">
                Microbial culture, fermentation technology, protein structure, enzyme kinetics, and metabolic pathways.
              </p>

              <h6 className="doz-st-para mb-0"><FaVial size={22} color="#095287" />&nbsp; Cell & Tissue Culture Techniques:</h6>
              <p className="doz-hse-text">
                Plant and animal tissue culture, hybridoma technology, and cloning techniques.
              </p>

              <h6 className="doz-st-para mb-0"><FaLeaf size={22} color="#095287" />&nbsp; Environmental Biotechnology:</h6>
              <p className="doz-hse-text">
                Bioremediation, biofertilizers, waste management, and renewable bioenergy.
              </p>

              <h6 className="doz-st-para mb-0"><FaCapsules size={22} color="#095287" />&nbsp; Industrial & Medical Biotechnology:</h6>
              <p className="doz-hse-text">
                Vaccine production, diagnostic kits, pharmaceuticals, fermentation industries, and bioinformatics.
              </p>

              <h6 className="doz-st-para mb-0"><FaFlask size={22} color="#095287" />&nbsp; Practical Training:</h6>
              <p className="doz-hse-text">
                Lab experiments, project work, internships, and industrial visits for real-world exposure.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students acquire <strong>laboratory and research skills, genetic analysis techniques, bioinformatics tools, data interpretation, and problem-solving abilities</strong>. They also develop expertise in modern equipment handling, experimental design, and sustainable biotech solutions.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can work in <strong>pharmaceutical industries, food technology companies, research laboratories, hospitals, agriculture firms, and environmental organizations</strong>. Career roles include <strong>biotechnologist, microbiologist, genetic counselor, clinical researcher, bioinformatics analyst, and quality control officer</strong>. Many also pursue higher education like <strong>M.Sc. Biotechnology, M.Sc. Microbiology, M.Tech. Biotech, or Ph.D.</strong>
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

export default BscBiotech;