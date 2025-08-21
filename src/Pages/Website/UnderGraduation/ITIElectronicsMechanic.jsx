import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
import { 
  FaMicrochip, 
  FaTv, 
  FaMobileAlt, 
  FaLaptop, 
  FaBroadcastTower, 
  FaProjectDiagram, 
  FaTools 
} from "react-icons/fa";

export default function ItiElectronicsMechanic() {
  return (
    <>

    <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="text-center doz-arts">ITI – Electronics Mechanic (2 Years)</h1>

                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Electronics Mechanic Trade is a <strong>two-year vocational program</strong> 
                    focused on <strong>repair, maintenance, and testing of electronic equipment</strong>. 
                    With the booming <strong>electronics and communication industry</strong>, this trade has 
                    high demand. At Ghanshyam Group, students are trained to handle 
                    <strong> devices ranging from televisions and computers to advanced circuits and control systems</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The training covers fundamentals to advanced electronics applications.</p>

                  <h6 className="doz-st-para mb-0"><FaMicrochip size={22} color="#095287" />&nbsp; Fundamentals of Electronics:</h6>
                  <p className="doz-hse-text">Semiconductors, circuits, and basic electronic principles.</p>

                  <h6 className="doz-st-para mb-0"><FaTv size={22} color="#095287" />&nbsp; Consumer Electronics Repair:</h6>
                  <p className="doz-hse-text">Repair of TVs, radios, smartphones, laptops, and computers.</p>

                  <h6 className="doz-st-para mb-0"><FaMobileAlt size={22} color="#095287" />&nbsp; Home Appliances & Communication Devices:</h6>
                  <p className="doz-hse-text">Installation and servicing of household appliances and telecom devices.</p>

                  <h6 className="doz-st-para mb-0"><FaLaptop size={22} color="#095287" />&nbsp; Microprocessors & Microcontrollers:</h6>
                  <p className="doz-hse-text">Basics of digital systems, controllers, and embedded electronics.</p>

                  <h6 className="doz-st-para mb-0"><FaProjectDiagram size={22} color="#095287" />&nbsp; PCB Designing & Testing:</h6>
                  <p className="doz-hse-text">Testing, calibration, and printed circuit board designing.</p>

                  <h6 className="doz-st-para mb-0"><FaTools size={22} color="#095287" />&nbsp; Practical Training:</h6>
                  <p className="doz-hse-text">Hands-on lab work with soldering, assembly, and diagnostic tools.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students acquire <strong>circuit designing, soldering, fault diagnosis, and repair techniques</strong>. 
                      They also master the use of <strong>diagnostic tools, maintenance of electronic systems, 
                      and installation practices</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Electronics Mechanics can work in <strong>telecom companies, electronics industries, 
                      repair centers, IT hardware firms, and government departments</strong>. 
                      They may also <strong>start their own electronics repair and servicing businesses</strong>.
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
