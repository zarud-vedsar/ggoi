import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import {
  FaBolt,
  FaPlug,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaHandsHelping
} from "react-icons/fa";
import Institutions from "./Institutions";

function ITIElectrician() {
  return (
    <>
      <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ba-hse-card1">
                <div className="card-body">
                  <div className="ba-hse-header">
                    <h1 className="mb-5 text-center doz-arts">ITI – Electrician (2 Years)</h1>

                    <h4 className="mb-0 doz-over">Overview:</h4>
                    <p className="ba-hse-para">
                      The Electrician Trade is one of the most popular ITI programs, spanning <strong>two years of training</strong> in
                      electrical systems and applications. At Ghanshyam Group of Institutions, the program is designed to prepare students
                      for the growing demand of <strong>skilled electricians</strong> in industrial, commercial, and residential sectors.
                      Students learn the fundamentals of <strong>electricity, electrical machines, wiring systems, and maintenance</strong> of electrical equipment.
                      With the rising need for <strong>power distribution, renewable energy, and electrification in India</strong>, this trade ensures long-term career stability.
                    </p>

                    <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                    <p className="doz-hse-para">This trade combines theory with extensive hands-on practical workshops.</p>

                    <h6 className="doz-st-para mb-0"><FaBolt size={22} color="#095287" />&nbsp; Basics of Electricity:</h6>
                    <p className="doz-hse-text">Electrical circuits, current flow, and basic electrical principles.</p>

                    <h6 className="doz-st-para mb-0"><FaPlug size={22} color="#095287" />&nbsp; Wiring Techniques:</h6>
                    <p className="doz-hse-text">Domestic and industrial wiring methods for safe installations.</p>

                    <h6 className="doz-st-para mb-0"><FaTools size={22} color="#095287" />&nbsp; Appliances & Motors:</h6>
                    <p className="doz-hse-text">Installation and maintenance of household appliances and electric motors.</p>

                    <h6 className="doz-st-para mb-0"><FaCogs size={22} color="#095287" />&nbsp; Transformers & Generators:</h6>
                    <p className="doz-hse-text">Operation, testing, and repair of transformers, generators, and switchgear.</p>

                    <h6 className="doz-st-para mb-0"><FaShieldAlt size={22} color="#095287" />&nbsp; Safety & Measurement:</h6>
                    <p className="doz-hse-text">Electrical safety protocols, earthing systems, and use of measuring tools.</p>

                    <h6 className="doz-st-para mb-0"><FaHandsHelping size={22} color="#095287" />&nbsp; Hands-on Workshops:</h6>
                    <p className="doz-hse-text">Real-world training with practical exposure in labs and fieldwork.</p>

                    <div className="">
                      <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                      <p className="doz-skills-para">
                        Students gain <strong>technical expertise in wiring, troubleshooting, appliance repair, motor handling, and safety compliance</strong>.
                        They also learn to work with <strong>modern electrical tools, interpret technical drawings, and install electrical systems</strong>.
                      </p>

                      <h6 className="doz-over mb-0">Career Opportunities:</h6>
                      <p className="doz-skills-para">
                        Graduates can work as <strong>electricians in industries, power plants, railways, construction companies, and government departments</strong>.
                        They can also <strong>start their own electrical workshops or contract businesses</strong>.
                        Many pursue further studies like a <strong>Diploma in Electrical Engineering</strong>.
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

export default ITIElectrician;