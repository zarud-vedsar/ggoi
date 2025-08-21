  import React from "react";
 import Footer from '../../../Components/Website/Footer';
 import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import {
  FaUniversity,
  FaGavel,
  FaHome,
  FaGlobe,
  FaFileContract
} from "react-icons/fa";

  function LLB() {
    return (
       <>

        <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-3 text-center doz-arts">Bachelor of Laws (LLB)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Laws (LLB) is a <strong>three-year professional degree program</strong> that equips students with a comprehensive understanding of the legal system, judicial processes, and the role of law in society. At Ghanshyam Group of Institutions, the LLB program blends <strong>rigorous theoretical learning with hands-on training</strong>, ensuring students become competent legal professionals. The course covers diverse areas of law including <strong>constitutional law, criminal law, civil law, family law, property law, and international law</strong>, along with opportunities to practice through moot courts, internships, and legal aid clinics.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
              <p className="doz-hse-para">
                The program offers in-depth understanding of various legal systems and their real-world applications.
              </p>

              <h6 className="doz-st-para mb-0"><FaUniversity size={22} color="#095287" />&nbsp; Constitutional & Administrative Law:</h6>
              <p className="doz-hse-text">
                Structure of Indian governance, rights, duties, and the functioning of the judiciary.
              </p>

              <h6 className="doz-st-para mb-0"><FaGavel size={22} color="#095287" />&nbsp; Criminal Law & Civil Law:</h6>
              <p className="doz-hse-text">
                IPC, CrPC, Civil Procedure Code, Evidence Act, and case studies.
              </p>

              <h6 className="doz-st-para mb-0"><FaHome size={22} color="#095287" />&nbsp; Family & Property Law:</h6>
              <p className="doz-hse-text">
                Laws related to marriage, inheritance, succession, and property rights.
              </p>

              <h6 className="doz-st-para mb-0"><FaGlobe size={22} color="#095287" />&nbsp; International Law & Human Rights:</h6>
              <p className="doz-hse-text">
                Global treaties, conventions, and cross-border disputes.
              </p>

              <h6 className="doz-st-para mb-0"><FaFileContract size={22} color="#095287" />&nbsp; Legal Drafting & Research:</h6>
              <p className="doz-hse-text">
                Moot court exercises, case analysis, contract drafting, and legal research methodology.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  The LLB program develops <strong>legal reasoning, advocacy skills, drafting ability, critical thinking, logical analysis, public speaking, and ethical judgment.</strong> Students also gain confidence through moot courts, debates, and internships with practicing advocates.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can pursue careers as <strong>advocates, judges (through judiciary exams), corporate lawyers, legal advisors, public prosecutors, human rights activists, and NGO legal consultants.</strong> They can also pursue <strong>LL.M. or Ph.D. in Law</strong> for specialization and research careers.
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

export default LLB;