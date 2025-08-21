import React from 'react'
import '../../Components/Website/assets/css/events-and-extra-curriculars.css'
import MagicFadeCard from '../../Components/Website/MagicFadeCard';

import festImg from '../../Components/Website/assets/img/festImg.jpg';
import exhibitionImg from '../../Components/Website/assets/img/exibitionImg.jpg';
import industrialVisit from '../../Components/Website/assets/img/industrialvisit.jpg';


const eventList = [
    {
        images: [festImg, exhibitionImg, industrialVisit, festImg, exhibitionImg, festImg, industrialVisit],
        link: "",
        name: "Annual Cultural Fest"
    },
    {
        images: [industrialVisit, festImg, exhibitionImg, festImg, industrialVisit, exhibitionImg, festImg],
        link: "",
        name: "Science and Technical Exhibitions"
    },
    {
        images: [exhibitionImg, festImg, festImg, industrialVisit, exhibitionImg, festImg, industrialVisit],
        link: "",
        name: "Industrial Visits"
    },
    {
        images: [festImg, industrialVisit, exhibitionImg, festImg, festImg, industrialVisit, exhibitionImg],
        link: "",
        name: "Seminars and Workshops"
    },
    {
        images: [exhibitionImg, festImg, industrialVisit, exhibitionImg, industrialVisit, festImg, festImg],
        link: "",
        name: "Guest Lectures by Industry Experts"
    },
    {
        images: [industrialVisit, exhibitionImg, festImg, festImg, industrialVisit, festImg, exhibitionImg],
        link: "",
        name: "Celebration of National Days"
    },
    {
        images: [festImg, festImg, industrialVisit, exhibitionImg, industrialVisit, exhibitionImg, festImg],
        link: "",
        name: "Blood Donation and Social Awareness Programs"
    },
    {
        images: [exhibitionImg, festImg, festImg, industrialVisit, exhibitionImg, festImg, industrialVisit],
        link: "",
        name: "Industrial Visits"
    },
];



const EventsAndExtraCurriculars = () => {
    return (
        <section className="pt-5 events-and-extra-curriculars-section"  >
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className='text-center section-heading '>Events & Extra Curriculars</h2>
                    </div>
                    {eventList.map((event, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 my-2 px-2 " key={index} data-aos="fade-up" data-aos-delay="300">
                            <div className='am-card  position-relative'>
                                <MagicFadeCard images={event?.images} delay={3000 + (index * 300)} />

                                <div className='event-name'>
                                    <p className=' am-f22 text-white'>{event.name}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}

export default EventsAndExtraCurriculars