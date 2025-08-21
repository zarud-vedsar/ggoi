 import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-commerce.css';
import { FaChartLine, FaChartPie, FaBalanceScale, FaLaptop } from "react-icons/fa";

function Bcom() {
   return (
      <>

  <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-3 text-center doz-arts">Bachelor of Commerce (B.Com.)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Commerce (B.Com.) is a <strong>three-year undergraduate program</strong> designed to develop
                expertise in business, finance, economics, and commerce-related disciplines. The program emphasizes both
                <strong> practical and theoretical exposure</strong> to core areas of accounting, management, and taxation, ensuring that
                students are industry-ready upon graduation. At Ghanshyam Group, the B.Com. program is not limited to
                traditional classroom learning but also integrates <strong>case studies, projects, and practical training</strong>.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The curriculum blends financial theory with real-world applications to prepare future professionals.
              </p>

              <h6 className="doz-st-para mb-0"><FaChartLine size={22} color="#095287" />&nbsp; Accounting & Finance:</h6>
              <p className="doz-hse-text">
                Corporate accounting, financial management, cost accounting, auditing, and banking.
              </p>

              <h6 className="doz-st-para mb-0"><FaChartPie size={22} color="#095287" />&nbsp; Economics & Business Studies:</h6>
              <p className="doz-hse-text">
                Microeconomics, macroeconomics, international trade, and business statistics.
              </p>

              <h6 className="doz-st-para mb-0"><FaBalanceScale size={22} color="#095287" />&nbsp; Law & Taxation:</h6>
              <p className="doz-hse-text">
                Business law, corporate governance, taxation, GST, and auditing practices.
              </p>

              <h6 className="doz-st-para mb-0"><FaLaptop size={22} color="#095287" />&nbsp; Entrepreneurship & Technology:</h6>
              <p className="doz-hse-text">
                E-commerce, business communication, entrepreneurship development, and management practices.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students acquire <strong>numerical ability, problem-solving, financial analysis, decision-making, critical thinking,
                  and management skills.</strong> They also learn accounting software, taxation tools, and analytical report preparation,
                  which enhance employability.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can work as <strong>accountants, tax consultants, auditors, bankers, financial advisors, entrepreneurs,
                  or corporate executives.</strong> They may also pursue advanced qualifications like <strong>CA, CS, CMA, MBA,
                  and M.Com.</strong>
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

export default Bcom;