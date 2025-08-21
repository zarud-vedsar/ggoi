import React from 'react'
import '../../Components/Website/assets/css/campus-facilities.css';
import classroomImg from '../../Components/Website/assets/img/classroom.png';
import laboratoryImg from '../../Components/Website/assets/img/laboratory.png';
import workshopImg from '../../Components/Website/assets/img/workshop.png';
import libraryImg from '../../Components/Website/assets/img/library.png';
import computerLabImg from '../../Components/Website/assets/img/computer-lab.png';
import wifiImg from '../../Components/Website/assets/img/wifi.png';
import cafeteriaImg from '../../Components/Website/assets/img/cafeteria.png';
import gymImg from '../../Components/Website/assets/img/gym.png';
import hostelImg from '../../Components/Website/assets/img/hostel.png';
import transportImg from '../../Components/Website/assets/img/transport.png';
const CampusFacilities = () => {
   const list = [
    {
        title: "Classrooms",
        img: classroomImg,
        desc: "Well-ventilated classrooms with modern teaching aids."
    },
    {
        title: "Laboratories",
        img: laboratoryImg,
        desc: "Equipped with the latest machinery and software tools for practical learning."
    },
    {
        title: "Workshops",
        img: workshopImg,
        desc: "Dedicated workshops for different engineering disciplines."
    },
    {
        title: "Library",
        img: libraryImg,
        desc: "Rich in technical, management and pharmaceutical books with journals and digital content."
    },
    {
        title: "Computer Labs",
        img: computerLabImg,
        desc: "High-speed internet-enabled systems with updated software."
    },
    {
        title: "Wi-Fi Campus",
        img: wifiImg,
        desc: "Internet connectivity throughout the campus."
    },
    {
        title: "Cafeteria",
        img: cafeteriaImg,
        desc: "Provides hygienic and nutritious food."
    },
    {
        title: "Sports & Gym",
        img: gymImg,
        desc: "Indoor and outdoor sports facilities, gymnasium for fitness."
    },
    {
        title: "Hostels",
        img: hostelImg,
        desc: "Separate hostels for boys and girls with mess facility and round-the-clock security."
    },
    {
        title: "Transport",
        img: transportImg,
        desc: "Fleet of buses covering all major routes of the city."
    }
];

    return (
        <section className="py-5 campus-facilities-section"   style={{backgroundColor:"#f5f5f5"}} >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-center section-heading ">Campus Facilities</h2>
                    </div>

                </div>
                <div className='row d-flex flex-wrap justify-content-center'>
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