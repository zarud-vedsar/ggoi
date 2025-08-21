import React from 'react'
import '../../Components/Website/assets/css/academics-and-faculty.css'
import facultyMember from '../../Components/Website/assets/img/faculty-members.png';
import smartClassroom from '../../Components/Website/assets/img/smartClassroom.png';
import seminar from '../../Components/Website/assets/img/seminar.png';
import practical from '../../Components/Website/assets/img/practical.png';
import agriculture from '../../Components/Website/assets/img/agriculture.png';
import herbal from '../../Components/Website/assets/img/herbal.png';
import presentation from '../../Components/Website/assets/img/presentation.png';

const eventList = [
    { img: facultyMember, link: "", name: "Over 850+ qualified faculty members" },
    { img: smartClassroom, link: "", name: "Smart Classrooms & E-Content Delivery" },
    { img: seminar, link: "", name: "National/International Seminars" },
    { img: practical, link: "", name: "Internal Assessment + Practical Exposure" },
    { img: agriculture, link: "", name: "Agriculture field research projects" },
    { img: herbal, link: "", name: "Herbal medicine & pharmacy R&D" },
    { img: presentation, link: "", name: "Interdisciplinary seminars and paper presentations" },
];

const AcademicsAndFaculty = () => {
    return (
        <section className="py-5 academics-and-faculty-section"  >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " data-aos="fade-up" data-aos-delay="200">
                        <h2 className='text-white text-center mb-5 section-heading'>Academics & Faculty</h2>
                    </div>
                    {eventList.map((event, index) => (
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 d-flex justify-content-center" key={index} data-aos="fade-up" data-aos-delay="300">
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