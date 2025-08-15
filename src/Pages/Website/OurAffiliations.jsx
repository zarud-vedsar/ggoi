import React from 'react'
import '../../Components/Website/assets/css/our-affiliation.css'
const OurAffiliations = () => {
    const list = [
        {
            title: "Dr. A.P.J. Abdul Kalam Technical University",
            img: "/website/img/aktulogo.png",
        },
        {
            title: "Government of Uttar Pradesh",
            img: "/website/img/govuplogo.svg",
        },
        {
            title: "Pharmacy Council of India",
            img: "/website/img/pcoilogo.png",
        },
      
        {
            title: "Prof. Rajendra Singh (Rajju Bhaiya) University",
            img: "/website/img/rsu.png",
        },
      
        
    ];

    
    return (
        <section className="py-5 our-affiliation-section" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-center">Our Affiliations</h2>
                    </div>

                </div>
                <div className='row'>
                    {list?.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-6  mb-4" key={index}  data-aos="fade-up" data-aos-delay="300">
                            <div className="am-card text-center">
                                <img src={item.img} alt={item.title} className="mb-4" />
                                <p className="title am-f18 mb-2">{item.title}</p>
                                <p className="para am-f16">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default OurAffiliations