import React from 'react'
import '../../Components/Website/assets/css/campus-facilities.css'
const CampusFacilities = () => {
    const list = [
        {
            title: "Classrooms",
            img: "website/img/classroom.png",
            desc: "Well-ventilated classrooms with modern teaching aids."
        },
        {
            title: "Laboratories",
            img: "website/img/laboratory.png",
            desc: "Equipped with the latest machinery and software tools for practical learning."
        },
        {
            title: "Workshops",
            img: "website/img/workshop.png",
            desc: "Dedicated workshops for different engineering disciplines."
        },
        {
            title: "Library",
            img: "website/img/library.png",
            desc: "Rich in technical, management and pharmaceutical books with journals and digital content."
        },
        {
            title: "Computer Labs",
            img: "website/img/computer-lab.png",
            desc: "High-speed internet-enabled systems with updated software."
        },
        {
            title: "Wi-Fi Campus",
            img: "website/img/wifi.png",
            desc: "Internet connectivity throughout the campus."
        },
        {
            title: "Cafeteria",
            img: "website/img/cafeteria.png",
            desc: "Provides hygienic and nutritious food."
        },
        {
            title: "Sports & Gym",
            img: "website/img/gym.png",
            desc: "Indoor and outdoor sports facilities, gymnasium for fitness."
        },
        {
            title: "Hostels",
            img: "website/img/hostel.png",
            desc: "Separate hostels for boys and girls with mess facility and round-the-clock security."
        },
        {
            title: "Transport",
            img: "website/img/transport.png",
            desc: "Fleet of buses covering all major routes of the city."
        }
    ];
    return (
        <section className="py-5 campus-facilities-section" style={{ background: '#F5F5F5' }} >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5">Campus Facilities</h2>
                    </div>

                </div>
                <div className='row'>
                    {list?.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}  data-aos="fade-up" data-aos-delay="300">
                            <div className="am-card text-center">
                                <img src={item.img} alt={item.title} className="mb-4" />
                                <p className="title am-f22 mb-2">{item.title}</p>
                                <p className="para am-f16">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default CampusFacilities