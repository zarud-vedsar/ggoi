  import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import { 
  FaCogs, 
  FaTruck, 
  FaTools, 
  FaCarBattery, 
  FaWrench, 
  FaCheckCircle, 
  FaOilCan 
} from "react-icons/fa";

export default function ItiDieselMechanic() {
  return (
    <>

    <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className=" text-center doz-arts">ITI – Diesel Mechanic (1 Year)</h1>

                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Diesel Mechanic Trade is a <strong>one-year vocational program</strong> 
                    that trains students in the <strong>repair and maintenance of diesel engines and vehicles</strong>. 
                    With the automobile and transport sector being one of the largest industries in India, 
                    this course is highly job-oriented. At Ghanshyam Group, students learn both 
                    <strong>theoretical concepts</strong> and <strong>practical repair techniques</strong> for heavy and light diesel engines.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum combines engine theory with practical workshop training.</p>

                  <h6 className="doz-st-para mb-0"><FaCogs size={22} color="#095287" />&nbsp; Diesel Engine Basics:</h6>
                  <p className="doz-hse-text">Fundamentals of diesel engines, fuel systems, and lubrication.</p>

                  <h6 className="doz-st-para mb-0"><FaTruck size={22} color="#095287" />&nbsp; Vehicle & Machinery Repair:</h6>
                  <p className="doz-hse-text">Repair of tractors, trucks, buses, generators, and heavy vehicles.</p>

                  <h6 className="doz-st-para mb-0"><FaWrench size={22} color="#095287" />&nbsp; Engine Overhauling & Transmission:</h6>
                  <p className="doz-hse-text">Engine dismantling, transmission systems, brake mechanisms, and servicing.</p>

                  <h6 className="doz-st-para mb-0"><FaCarBattery size={22} color="#095287" />&nbsp; Electrical Systems:</h6>
                  <p className="doz-hse-text">Study of wiring, batteries, alternators, and electrical systems in diesel vehicles.</p>

                  <h6 className="doz-st-para mb-0"><FaOilCan size={22} color="#095287" />&nbsp; Preventive Maintenance:</h6>
                  <p className="doz-hse-text">Use of diagnostic tools, servicing techniques, and preventive maintenance practices.</p>

                  <h6 className="doz-st-para mb-0"><FaTools size={22} color="#095287" />&nbsp; Hands-on Workshop Training:</h6>
                  <p className="doz-hse-text">Practical training in garages, workshops, and live engine repair.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students acquire <strong>engine repair, troubleshooting, vehicle servicing, diagnostic analysis, and maintenance skills</strong>. 
                      They also learn to use <strong>modern tools</strong> and follow strict <strong>safety protocols</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Diesel Mechanics can work in <strong>automobile workshops, transport companies, railways, construction firms, and service centers</strong>. 
                      They may also establish their own <strong>garage or repair service business</strong>.
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
