import React from 'react'
import '../../Components/Website/assets/css/events-and-extra-curriculars.css'



const eventList = [
    { img: 'website/img/festImg.jpg', link: "", name: "Annual Cultural Fest" },
    { img: 'website/img/exibitionImg.jpg', link: "", name: "Science and Technical Exhibitions" },
    { img: 'website/img/industrialvisit.jpg', link: "", name: "Industrial Visits" },
    { img: 'website/img/exibitionImg.jpg', link: "", name: "Seminars and Workshops" },
    { img: 'website/img/festImg.jpg', link: "", name: "Guest Lectures by Industry Experts" },
    { img: 'website/img/industrialvisit.jpg', link: "", name: "Celebration of National Days" },
    { img: 'website/img/festImg.jpg', link: "", name: " Blood Donation and Social Awareness Programs" },


];

const EventsAndExtraCurriculars = () => {
    return (
        <section className="py-5 events-and-extra-curriculars-section"  >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className='text-center'>Events & Extra Curriculars</h2>
                    </div>
                    {eventList.map((event, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-5 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                            <div className='am-card d-flex flex-column justify-content-center align-items-center'>
                                <img src={event.img} alt="" className='mb-4 ' />
                                <p className='event-name am-f22 text-dark'>{event.name}</p>
                            </div>
                        </div>

                    ))}


                </div>

            </div>

        </section>
    )
}

export default EventsAndExtraCurriculars