import React from 'react'
import '../../Components/Website/assets/css/academics-and-faculty.css'



const eventList = [
    { img: 'website/img/faculty-members.png', link: "", name: "Over 850+ qualified faculty members" },
    { img: 'website/img/smartClassroom.png', link: "", name: " Smart Classrooms & E-Content Delivery" },
    { img: 'website/img/seminar.png', link: "", name: "National/International Seminars" },
    { img: 'website/img/practical.png', link: "", name: "Internal Assessment + Practical Exposure" },
    { img: 'website/img/agriculture.png', link: "", name: "Agriculture field research projects" },
    { img: 'website/img/herbal.png', link: "", name: " Herbal medicine & pharmacy R&D" },
    { img: 'website/img/presentation.png', link: "", name: "Interdisciplinary seminars and paper presentations" },


];

const AcademicsAndFaculty = () => {
    return (
        <section className="py-5 academics-and-faculty-section"  >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " data-aos="fade-up" data-aos-delay="200">
                        <h2 className='text-white text-center mb-5'>Academics & Faculty</h2>
                    </div>
                    {eventList.map((event, index) => (
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                            <div className='am-card d-flex'>
                               <div className='event-name-container'> <p className='event-name am-f18 text-white'>{event.name}</p></div>
                                                               <div className='img-container'> <img src={event.img} alt="" className='img-fluid' /></div>

                            </div>
                        </div>

                    ))}


                </div>

            </div>

        </section>
    )
}

export default AcademicsAndFaculty