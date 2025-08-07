import React from 'react'
import '../../Components/Website/assets/css/welcome-note-new-student.css'
 const WelcomeNoteToNewStudent = () => {
    return (
        <section className='welcome-note-new-student-section'>
            <div class="campus v__3 pt--120 pb--60">
                <div class="container">
                    <div class="campus__wrapper">
                        <div class="row">

                            <div class="col-lg-8 " data-aos="fade-up" data-aos-delay="200">
                                <div class="campus__right--text">
                                    <h2 class="campus__right--text--title">
                                        Welcome Note to New Students
                                    </h2>
                                    <p class="campus__right--text--description am-f18" style={{ maxWidth: "none" }}>
                                        <strong>  The Ghanshyam Group of Institutions family warmly welcomes each new entrant/student.</strong>
                                    </p><p class="campus__right--text--description" style={{ maxWidth: "none" }}>
                                        As a student, you are joining an institution that serves as a workshop for developing a healthy, cultured, and morally upright young mind.
                                        There is an emphasis on self-study and intellectual growth aligned with ethical values, human ideals, and national goals.

                                    </p><p class="campus__right--text--description" style={{ maxWidth: "none" }}> You will spend the best years of your life on our campus, under our close guidance.
                                        We expect you to make the most of the available facilities and contribute to enhancing the dignity of the college environment.
 
                                    </p><p class="campus__right--text--description am-f18" style={{ maxWidth: "none" }}><strong>  We wish you a bright and successful future.      </strong>                      </p>
                                </div>
                            </div>
                            <div class="col-lg-4 d-flex justify-content-center d-lg-block" data-aos="fade-up" data-aos-delay="300">
                                <div className='apply-buttom-section '>
                                    <img src="website/img/round-arrow.svg" alt="" />
                                    <div class="campus__link">
                                        <a href="campus-life.html" class="campus__link--btn">
                                            Apply Now
                                        </a>
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