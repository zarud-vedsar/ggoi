 import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-arts.css';
import { FaCheckCircle, FaCut, FaPaintBrush, FaRulerCombined, FaTshirt } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

export default function ItiDressMaking() {
  return (
    <>

    <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-5 text-center doz-arts">ITI – Dress Making (1 Year)</h1>

                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    
                    The Dress Making Trade is a <strong>one-year vocational program</strong> 
                    designed for students interested in <strong>tailoring, garment construction, and the fashion industry</strong>. 
                    At Ghanshyam Group, this program trains students in <strong>designing, cutting, and stitching garments</strong> 
                    using both traditional and modern methods. It is especially useful for those 
                    aiming at <strong>self-employment and entrepreneurship</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum blends creativity with practical tailoring skills.</p>

                  <h6 className="doz-st-para mb-0"><FaCut size={22} color="#095287" />&nbsp; Basics of Tailoring:</h6>
                  <p className="doz-hse-text">Stitching techniques, fabric selection, and basic tailoring skills.</p>

                  <h6 className="doz-st-para mb-0"><FaRulerCombined size={22} color="#095287" />&nbsp; Cutting, Drafting & Pattern Making:</h6>
                  <p className="doz-hse-text">Techniques of garment measurement, drafting, and precision cutting.</p>

                  <h6 className="doz-st-para mb-0"><GiAmpleDress  size={22} color="#095287" />&nbsp; Sewing Machine Operation:</h6>
                  <p className="doz-hse-text">Machine handling, stitching maintenance, and troubleshooting.</p>

                  <h6 className="doz-st-para mb-0"><FaPaintBrush size={22} color="#095287" />&nbsp; Embroidery & Decorative Stitching:</h6>
                  <p className="doz-hse-text">Creative embroidery, decorative design, and garment finishing.</p>

                  <h6 className="doz-st-para mb-0"><FaTshirt size={22} color="#095287" />&nbsp; Traditional & Modern Garments:</h6>
                  <p className="doz-hse-text">Production of ethnic wear, western outfits, and modern designs.</p>

                  <h6 className="doz-st-para mb-0"><FaCheckCircle size={22} color="#095287" />&nbsp; Quality Control & Finishing:</h6>
                  <p className="doz-hse-text">Inspection, garment finishing techniques, and professional quality checks.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students acquire <strong>tailoring expertise, creativity, garment construction, design skills, and entrepreneurial abilities</strong>. 
                      They also gain confidence in starting their <strong>own tailoring shop or boutique business</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Graduates can work as <strong>tailors, dressmakers, garment supervisors, fashion assistants, or boutique owners</strong>. 
                      They may also join the <strong>garment and textile industries</strong> or pursue advanced courses in <strong>fashion designing</strong>.
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

