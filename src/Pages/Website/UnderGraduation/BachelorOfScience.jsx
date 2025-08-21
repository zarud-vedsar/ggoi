  import React from "react";
import Footer from '../../../Components/Website/Footer';
import '../../../Components/Website/assets/css/bachelor-of-science.css';
import { FaAtom, FaFlask, FaSuperscript } from "react-icons/fa";
import { GiPlantRoots, GiDna2 } from "react-icons/gi";

function Bsc() {
   return (
      <>
      <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="ba-hse-card1">
          <div className="card-body">
            <div className="ba-hse-header">
              <h1 className="mb-3 text-center doz-arts">Bachelor of Science (B.Sc.)</h1>
              <h4 className="mb-0 doz-over">Overview:</h4>
              <p className="ba-hse-para">
                The Bachelor of Science (B.Sc.) is a <strong>three-year undergraduate program</strong> that provides a solid
                foundation in scientific knowledge, experimentation, and logical reasoning. At Ghanshyam Group of
                Institutions, the program emphasizes both <strong>theoretical study and practical application</strong>, preparing students
                to contribute to research, technology, and innovation. The B.Sc. program is available with specializations
                in <strong>Physics, Chemistry, Mathematics, Zoology, Botany, and Biotechnology</strong>, enabling students to tailor their
                education to career interests or research aspirations.
              </p>

              <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study: </h5>
              <p className="doz-hse-para">
                The program emphasizes core science fundamentals along with hands-on experiments and research exposure.
              </p>

              <h6 className="doz-st-para mb-0"><FaAtom size={22} color="#095287" />&nbsp; Physics:</h6>
              <p className="doz-hse-text">
                Mechanics, thermodynamics, optics, electricity, magnetism, quantum mechanics, and solid-state physics.
              </p>

              <h6 className="doz-st-para mb-0"><FaFlask size={22} color="#095287" />&nbsp; Chemistry:</h6>
              <p className="doz-hse-text">
                Inorganic, organic, and physical chemistry; spectroscopy; industrial chemistry; and analytical methods.
              </p>

              <h6 className="doz-st-para mb-0"><FaSuperscript size={22} color="#095287" />&nbsp; Mathematics:</h6>
              <p className="doz-hse-text">
                Algebra, calculus, differential equations, linear programming, statistics, and applied mathematics.
              </p>

              <h6 className="doz-st-para mb-0"><GiPlantRoots size={24} color="#095287" />&nbsp; Botany and Zoology:</h6>
              <p className="doz-hse-text">
                Plant taxonomy, physiology, ecology, genetics, microbiology, cell biology, evolution, and biodiversity studies.
              </p>

              <h6 className="doz-st-para mb-0"><GiDna2 size={24} color="#095287" />&nbsp; Biotechnology:</h6>
              <p className="doz-hse-text">
                Molecular biology, genetic engineering, immunology, bioinformatics, and microbial technology.
              </p>

              <div className="">
                <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                <p className="doz-skills-para">
                  Students gain <strong>lab experimentation skills, scientific reasoning, research methodology, quantitative
                  problem-solving, and teamwork</strong>. They also acquire proficiency in modern equipment handling,
                  data interpretation, and project work that prepares them for real-world challenges.
                </p>

                <h6 className="doz-over mb-0">Career Opportunities:</h6>
                <p className="doz-skills-para">
                  Graduates can work in <strong>research labs, pharmaceutical industries, biotechnology firms, environmental
                  organizations, IT/data analysis, and healthcare</strong>. They can also appear for competitive exams and
                  pursue higher studies like <strong>M.Sc., Ph.D., or technical programs.</strong>
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

export default Bsc;