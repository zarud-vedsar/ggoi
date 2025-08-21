 import React from "react";
       import Footer from '../../../Components/Website/Footer';
       import '../../../Components/Website/assets/css/bachelor-of-arts.css';
       import { 
  FaChild, 
  FaBookOpen, 
  FaUniversalAccess, 
  FaChalkboardTeacher, 
  FaSchool 
} from "react-icons/fa";
        
       function BTCEducation() {
          return (
             <>

   <section className="py-5" id="main-content" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ba-hse-card1">
              <div className="card-body">
                <div className="ba-hse-header">
                  <h1 className="mb-3 text-center doz-arts">Diploma in Elementary Education (D.El.Ed. / BTC)</h1>
                  <h4 className="mb-0 doz-over">Overview:</h4>
                  <p className="ba-hse-para">
                    The Diploma in Elementary Education (D.El.Ed.), popularly known as BTC, is a 
                    <strong> two-year program</strong> focused on preparing students for <strong>teaching at the primary and upper primary levels</strong>. 
                    At Ghanshyam Group, this course emphasizes <strong>child-centered education, inclusive teaching practices, 
                    and skill development in early education methods</strong>.
                  </p>

                  <h5 className="mb-1 doz-over">Curriculum Highlights / What You Will Study:</h5>
                  <p className="doz-hse-para">The curriculum is designed to build strong teaching foundations for future educators.</p>

                  <h6 className="doz-st-para mb-0"><FaChild size={22} color="#095287" />&nbsp; Child Psychology & Development:</h6>
                  <p className="doz-hse-text">Understanding the emotional, social, and cognitive growth of children.</p>

                  <h6 className="doz-st-para mb-0"><FaBookOpen size={22} color="#095287" />&nbsp; Pedagogy of Primary Subjects:</h6>
                  <p className="doz-hse-text">Teaching methodologies for language, mathematics, science, and social studies.</p>

                  <h6 className="doz-st-para mb-0"><FaUniversalAccess size={22} color="#095287" />&nbsp; Inclusive & Special Education:</h6>
                  <p className="doz-hse-text">Handling diverse classrooms and addressing the needs of differently-abled children.</p>

                  <h6 className="doz-st-para mb-0"><FaChalkboardTeacher size={22} color="#095287" />&nbsp; Classroom Management & Creativity:</h6>
                  <p className="doz-hse-text">Innovative teaching tools, storytelling, and activity-based learning.</p>

                  <h6 className="doz-st-para mb-0"><FaSchool size={22} color="#095287" />&nbsp; Internships & Practice:</h6>
                  <p className="doz-hse-text">School visits, teaching practice, and real classroom exposure.</p>

                  <div className="">
                    <h6 className="doz-over mb-0 mt-4">Skills You Gain:</h6>
                    <p className="doz-skills-para">
                      Students acquire <strong>lesson planning, creativity, patience, classroom innovation, empathy, and communication skills</strong>. 
                      They also develop the ability to <strong>manage and inspire young learners</strong>.
                    </p>

                    <h6 className="doz-over mb-0">Career Opportunities:</h6>
                    <p className="doz-skills-para">
                      Graduates can become <strong>primary school teachers, tutors, curriculum facilitators, and NGO education workers</strong>. 
                      With further studies like <strong>B.Ed. or M.Ed.</strong>, they can expand their scope to <strong>higher teaching roles</strong>.
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

export default BTCEducation;