   import React from "react";
     import Footer from '../../../Components/Website/Footer';
     import '../../../Components/Website/assets/css/bachelor-of-arts.css';
     import { 
  FaFileInvoiceDollar, 
  FaCoins, 
  FaBalanceScale, 
  FaChartBar, 
  FaRegFileAlt 
} from "react-icons/fa"; 
      
     function Mcom() {
        return (
           <>

            <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-3 text-center doz-arts">Master of Commerce (M.Com.)</h1>
                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Master of Commerce (M.Com.) is a <strong>two-year postgraduate degree</strong> designed to provide advanced insights into <strong>finance, taxation, business management, and economics</strong>. 
                    At Ghanshyam Group, the M.Com. curriculum is structured to meet the demands of the <strong>global business environment</strong> and prepare students for leadership roles in commerce and industry.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum integrates accounting, taxation, law, analytics, and research to create skilled professionals in commerce and management.</p>

                  <h6 className="doz-st-para mb-0"><FaFileInvoiceDollar size={22} color="#095287" />&nbsp; Advanced Accounting & Auditing:</h6>
                  <p className="doz-hse-text">Corporate finance, cost control, financial reporting, and auditing techniques.</p>

                  <h6 className="doz-st-para mb-0"><FaCoins size={22} color="#095287" />&nbsp; Taxation & Economics:</h6>
                  <p className="doz-hse-text">GST, direct and indirect taxation, managerial economics, and business environment.</p>

                  <h6 className="doz-st-para mb-0"><FaBalanceScale size={22} color="#095287" />&nbsp; Corporate Laws & Governance:</h6>
                  <p className="doz-hse-text">Business law, labor law, corporate policies, and business ethics.</p>

                  <h6 className="doz-st-para mb-0"><FaChartBar size={22} color="#095287" />&nbsp; Quantitative & Business Analytics:</h6>
                  <p className="doz-hse-text">Statistics, econometrics, business intelligence, and data-driven decision-making.</p>

                  <h6 className="doz-st-para mb-0"><FaRegFileAlt size={22} color="#095287" />&nbsp; Research & Dissertation:</h6>
                  <p className="doz-hse-text">Case studies, business reports, and academic research projects.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students gain <strong>financial decision-making, auditing proficiency, taxation knowledge, managerial expertise, and analytical research skills</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      M.Com. graduates can become <strong>financial analysts, auditors, tax consultants, bankers, investment advisors, professors, economists, or corporate executives</strong>. 
                      The program also lays a strong foundation for <strong>CA, CS, CMA, CFA, MBA, and Ph.D.</strong>.
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

export default Mcom;