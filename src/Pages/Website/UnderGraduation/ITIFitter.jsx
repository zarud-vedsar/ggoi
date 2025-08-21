  import React from "react";
  import Footer from '../../../Components/Website/Footer';
  import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
  import { 
  FaCogs, 
  FaWrench, 
  FaTools, 
  FaIndustry, 
  FaDraftingCompass, 
  FaHammer 
} from "react-icons/fa";

export default function ItiFitter() {
  return (
    <>
    <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-0 text-center doz-arts">ITI – Fitter (2 Years)</h1>

                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Fitter Trade is a <strong>two-year vocational program</strong> that trains students in 
                    assembling, fitting, and maintaining <strong>mechanical systems and machinery</strong>. 
                    At Ghanshyam Group, this program prepares students for <strong>mechanical industries, 
                    manufacturing plants, workshops, and engineering services</strong>. Fitters are vital in 
                    sectors like <strong>automobiles, shipbuilding, construction, and heavy machinery</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The course blends theory with practical workshop training.</p>

                  <h6 className="doz-st-para mb-0"><FaCogs size={22} color="#095287" />&nbsp; Mechanical Basics:</h6>
                  <p className="doz-hse-text">Fundamentals of mechanical engineering and workshop safety practices.</p>

                  <h6 className="doz-st-para mb-0"><FaWrench size={22} color="#095287" />&nbsp; Tools & Instruments:</h6>
                  <p className="doz-hse-text">Use of hand tools, power tools, and precision measuring devices.</p>

                  <h6 className="doz-st-para mb-0"><FaTools size={22} color="#095287" />&nbsp; Assembly & Fitting:</h6>
                  <p className="doz-hse-text">Assembly and fitting of machine parts, valves, and pipes.</p>

                  <h6 className="doz-st-para mb-0"><FaHammer size={22} color="#095287" />&nbsp; Fabrication Practices:</h6>
                  <p className="doz-hse-text">Welding, cutting, grinding, and drilling techniques.</p>

                  <h6 className="doz-st-para mb-0"><FaDraftingCompass size={22} color="#095287" />&nbsp; Blueprint Reading:</h6>
                  <p className="doz-hse-text">Understanding and interpreting mechanical drawings and blueprints.</p>

                  <h6 className="doz-st-para mb-0"><FaIndustry size={22} color="#095287" />&nbsp; Maintenance:</h6>
                  <p className="doz-hse-text">Preventive maintenance and servicing of industrial machines.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students develop <strong>precision measurement, machine handling, troubleshooting, and teamwork</strong>. 
                      They also gain expertise to <strong>repair, maintain, and assemble industrial equipment with accuracy</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Fitters can work in <strong>manufacturing industries, automobile plants, construction companies, shipyards, and workshops</strong>. 
                      They may also advance as <strong>maintenance supervisors, machine operators, or independent contractors</strong>.
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
