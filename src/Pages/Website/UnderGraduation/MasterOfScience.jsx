   import React from "react";
    import Footer from '../../../Components/Website/Footer';
    import '../../../Components/Website/assets/css/bachelor-of-arts.css'; 
    import { 
  FaAtom, 
  FaFlask, 
  FaSquareRootAlt, 
  FaLeaf, 
  FaDna, 
  FaMicroscope 
} from "react-icons/fa";
     
    function MasterOfScience() {
       return (
          <>

     <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-0 text-center doz-arts">Master of Science (M.Sc.)</h1>
                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Master of Science (M.Sc.) is a <strong>two-year postgraduate program</strong> that enhances students’ knowledge of advanced scientific concepts and research techniques. 
                    At Ghanshyam Group of Institutions, students can specialize in <strong>Physics, Chemistry, Mathematics, Botany, Zoology, and Biotechnology</strong>. 
                    The program emphasizes <strong>research orientation, lab training, and innovation</strong>, preparing graduates to excel in academics, industries, and laboratories.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum blends theoretical foundations with practical and research-oriented training across major science disciplines.</p>

                  <h6 className="doz-st-para mb-0"><FaAtom size={22} color="#095287" />&nbsp; Physics:</h6>
                  <p className="doz-hse-text">Quantum mechanics, nuclear physics, condensed matter physics, and electronics.</p>

                  <h6 className="doz-st-para mb-0"><FaFlask size={22} color="#095287" />&nbsp; Chemistry:</h6>
                  <p className="doz-hse-text">Advanced organic synthesis, spectroscopy, polymer science, and industrial chemistry.</p>

                  <h6 className="doz-st-para mb-0"><FaSquareRootAlt size={22} color="#095287" />&nbsp; Mathematics:</h6>
                  <p className="doz-hse-text">Pure and applied mathematics, statistics, operations research, and numerical analysis.</p>

                  <h6 className="doz-st-para mb-0"><FaLeaf size={22} color="#095287" />&nbsp; Life Sciences:</h6>
                  <p className="doz-hse-text">Molecular biology, microbiology, genetics, ecology, and immunology.</p>

                  <h6 className="doz-st-para mb-0"><FaDna size={22} color="#095287" />&nbsp; Biotechnology:</h6>
                  <p className="doz-hse-text">Genetic engineering, bioinformatics, environmental biotechnology, and microbial technology.</p>

                  <h6 className="doz-st-para mb-0"><FaMicroscope size={22} color="#095287" />&nbsp; Research Training:</h6>
                  <p className="doz-hse-text">Dissertation, seminars, industrial visits, and lab-based projects.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students acquire <strong>advanced laboratory techniques, research methodology, scientific data analysis, problem-solving ability, critical thinking, and innovation capacity</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Graduates can work as <strong>research scientists, biotechnologists, pharmaceutical specialists, laboratory managers, data analysts, and academic faculty members</strong>. 
                      The program also prepares students for <strong>Ph.D. and postdoctoral research</strong>.
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

export default MasterOfScience;