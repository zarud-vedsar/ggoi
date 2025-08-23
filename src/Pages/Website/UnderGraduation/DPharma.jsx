import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import {
  FaPrescriptionBottleAlt,
  FaFlask,
  FaHospital,
  FaLeaf,
  FaVials
} from "react-icons/fa";
import Institutions from "./Institutions";

function DPharma() {
  return (
    <>
      <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ba-hse-card1">
                <div className="card-body">
                  <div className="ba-hse-header">
                    <h1 className="mb-5 text-center doz-arts">Diploma in Pharmacy (D.Pharm)</h1>

                    <h4 className="mb-0 doz-over">Overview:</h4>
                    <p className="ba-hse-para">
                      The Diploma in Pharmacy (D.Pharm) is a <strong>two-year program</strong> that provides a strong foundation
                      in <strong>pharmaceutical sciences and healthcare practices</strong>. At Ghanshyam Group of Institutions,
                      this program is designed for students who wish to pursue a career as <strong>professional pharmacists</strong>
                      or continue higher studies in pharmacy. It prepares students for both <strong>clinical and industrial roles</strong> in healthcare.
                    </p>

                    <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                    <p className="doz-hse-para">The curriculum offers a mix of theory, lab work, and real-world training.</p>

                    <h6 className="doz-st-para mb-0"><FaPrescriptionBottleAlt size={22} color="#095287" />&nbsp; Pharmacology & Anatomy:</h6>
                    <p className="doz-hse-text">Basics of human anatomy, physiology, and drug interactions.</p>

                    <h6 className="doz-st-para mb-0"><FaFlask size={22} color="#095287" />&nbsp; Pharmaceutics & Pharmaceutical Chemistry:</h6>
                    <p className="doz-hse-text">Drug formulations, dosage forms, compounding, and chemical composition.</p>

                    <h6 className="doz-st-para mb-0"><FaHospital size={22} color="#095287" />&nbsp; Hospital & Clinical Pharmacy:</h6>
                    <p className="doz-hse-text">Dispensing practices, patient counseling, and hospital pharmacy operations.</p>

                    <h6 className="doz-st-para mb-0"><FaLeaf size={22} color="#095287" />&nbsp; Pharmacognosy:</h6>
                    <p className="doz-hse-text">Study of natural drugs and herbal medicines.</p>

                    <h6 className="doz-st-para mb-0"><FaVials size={22} color="#095287" />&nbsp; Practical Training:</h6>
                    <p className="doz-hse-text">Lab experiments, industry internships, and case studies in pharmacy practice.</p>

                    <div className="">
                      <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                      <p className="doz-skills-para">
                        Students gain <strong>drug knowledge, prescription handling, dispensing accuracy, pharmaceutical lab skills, healthcare ethics, and patient counseling ability</strong>.
                      </p>

                      <h6 className="doz-over mb-0">Career Opportunities:</h6>
                      <p className="doz-skills-para">
                        Graduates can work as <strong>registered pharmacists, pharmacy assistants, hospital/clinical pharmacy staff, drug store managers, or medical representatives</strong>.
                        They also have the option to pursue <strong>B.Pharm</strong> for advanced opportunities.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Institutions />

      <Footer />
    </>
  );
}

export default DPharma;