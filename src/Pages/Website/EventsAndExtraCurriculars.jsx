import React from 'react'
import '../../Components/Website/assets/css/events-and-extra-curriculars.css'
import MagicFadeCard from '../../Components/Website/MagicFadeCard';



const eventList = [
    {
        images: [
            'website/img/festImg.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/festImg.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg'
        ],
        link: "",
        name: "Annual Cultural Fest"
    },
    {
        images: [
            'website/img/industrialvisit.jpg',
            'website/img/festImg.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg'
        ],
        link: "",
        name: "Science and Technical Exhibitions"
    },
    {
        images: [
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg'
        ],
        link: "",
        name: "Industrial Visits"
    },
    {
        images: [
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg'
        ],
        link: "",
        name: "Seminars and Workshops"
    },
    {
        images: [
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/festImg.jpg',
            'website/img/festImg.jpg'
        ],
        link: "",
        name: "Guest Lectures by Industry Experts"
    },
    {
        images: [
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/festImg.jpg',
            'website/img/exibitionImg.jpg'
        ],
        link: "",
        name: "Celebration of National Days"
    },
    {
        images: [
            'website/img/festImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg'
        ],
        link: "",
        name: "Blood Donation and Social Awareness Programs"
    },
    {
        images: [
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg',
            'website/img/exibitionImg.jpg',
            'website/img/festImg.jpg',
            'website/img/industrialvisit.jpg'
        ],
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
                        <h2 className='text-center'>Events & Extra Curriculars</h2>
                    </div>
                    {eventList.map((event, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 my-2 px-2 " key={index} data-aos="fade-up" data-aos-delay="300">
                            <div className='am-card  position-relative'>
                                <MagicFadeCard images={event?.images} delay={3000 + (index * 400)} />

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