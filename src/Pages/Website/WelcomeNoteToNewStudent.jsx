import React from 'react'
import '../../Components/Website/assets/css/welcome-note-new-student.css'
import roundArrow from '../../Components/Website/assets/img/round-arrow.svg';
import { Link } from 'react-router-dom';
 const WelcomeNoteToNewStudent = () => {
    return (
        <section className='welcome-note-new-student-section'>
            <div className="campus v__3 pt--120 pb--60">
                <div className="container">
                    <div className="campus__wrapper">
                        <div className="row">

                            <div className="col-lg-8 " data-aos="fade-up" data-aos-delay="200">
                                <div className="campus__right--text">
                                    <h2 className="campus__right--text--title">
                                        Welcome Note to New Students
                                    </h2>
                                    <p className="campus__right--text--description am-f18" style={{ maxWidth: "none" }}>
                                        <strong>  The Ghanshyam Group of Institutions family warmly welcomes each new entrant/student.</strong>
                                    </p><p className="campus__right--text--description" style={{ maxWidth: "none" }}>
                                        As a student, you are joining an institution that serves as a workshop for developing a healthy, cultured, and morally upright young mind.
                                        There is an emphasis on self-study and intellectual growth aligned with ethical values, human ideals, and national goals.

                                    </p><p className="campus__right--text--description" style={{ maxWidth: "none" }}> You will spend the best years of your life on our campus, under our close guidance.
                                        We expect you to make the most of the available facilities and contribute to enhancing the dignity of the college environment.
 
                                    </p><p className="campus__right--text--description am-f18" style={{ maxWidth: "none" }}><strong>  We wish you a bright and successful future.      </strong>                      </p>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center d-lg-block" data-aos="fade-up" data-aos-delay="300">
                                <div className='apply-buttom-section '>
                                    <img src={roundArrow} alt="" />
                                    <div className="campus__link">
                                        <Link to="#" className="campus__link--btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeNoteToNewStudent;