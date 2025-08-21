  import React from "react";
  import Footer from '../../../Components/Website/Footer';
  import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
 import {
  FaPills,
  FaHeartbeat,
  FaFlask,
  FaLeaf,
  FaHospital,
  FaIndustry
} from "react-icons/fa";
 
  function BPharma() {
     return (
        <>

  <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-0 text-center doz-arts">Bachelor of Pharmacy (B.Pharm)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Pharmacy (B.Pharm) is a <strong>four-year undergraduate professional degree</strong> that provides in-depth knowledge of pharmaceutical sciences, drug development, healthcare, and clinical practices. At Ghanshyam Group of Institutions, the B.Pharm program blends <strong>theory, research, and industry exposure</strong>, preparing students for careers in pharmacy, biotechnology, clinical research, and healthcare management.
              </p>
              <p className="ba-hse-para">
                The course emphasizes <strong>modern drug discovery, patient care, and ethical pharmaceutical practices</strong> aligned with global healthcare standards.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">The curriculum covers key areas of pharmacy from drug design to patient care and clinical research.</p>

              <h6 className="doz-st-para mb-0"><FaPills size={22} color="#095287" />&nbsp; Pharmaceutics:</h6>
              <p className="doz-hse-text">Drug formulation, manufacturing, and dosage design.</p>

              <h6 className="doz-st-para mb-0"><FaHeartbeat size={22} color="#095287" />&nbsp; Pharmacology:</h6>
              <p className="doz-hse-text">Mechanism of drug action, toxicology, and therapeutic uses.</p>

              <h6 className="doz-st-para mb-0"><FaFlask size={22} color="#095287" />&nbsp; Medicinal Chemistry:</h6>
              <p className="doz-hse-text">Organic, inorganic, and medicinal chemistry for drug synthesis.</p>

              <h6 className="doz-st-para mb-0"><FaLeaf size={22} color="#095287" />&nbsp; Pharmacognosy:</h6>
              <p className="doz-hse-text">Study of plant-based and natural medicines.</p>

              <h6 className="doz-st-para mb-0"><FaHospital size={22} color="#095287" />&nbsp; Clinical & Hospital Pharmacy:</h6>
              <p className="doz-hse-text">Patient counseling, prescription monitoring, and clinical trials.</p>

              <h6 className="doz-st-para mb-0"><FaIndustry size={22} color="#095287" />&nbsp; Industrial Training & Projects:</h6>
              <p className="doz-hse-text">Practical exposure in pharma industries, hospitals, and research labs.</p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students acquire <strong>drug development expertise, laboratory techniques, prescription analysis, patient care skills</strong>, and <strong>pharmaceutical management abilities</strong>. The program also cultivates <strong>ethical decision-making, problem-solving</strong>, and a professional mindset required in global healthcare settings.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can work as <strong>pharmacists, drug inspectors, clinical researchers, medical representatives, hospital/clinical pharmacy officers</strong>, or <strong>production managers</strong> in pharmaceutical companies. They may also pursue advanced degrees like <strong>M.Pharm, MBA (Pharma), or Ph.D.</strong> for specialization and leadership roles.
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

export default BPharma;