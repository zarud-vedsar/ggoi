import React from 'react'
import '../../Components/Website/assets/css/our-affiliation.css';
import aktuLogo from '../../Components/Website/assets/img/aktulogo.png';
import govUpLogo from '../../Components/Website/assets/img/govuplogo.svg';
import pciLogo from '../../Components/Website/assets/img/pcoilogo.png';
import rsuLogo from '../../Components/Website/assets/img/rsu.png';
import bciLogo from '../../Components/Website/assets/img/bci.png';
import ncteLogo from '../../Components/Website/assets/img/ncte.png';
import scertLogo from '../../Components/Website/assets/img/scert.png';
const OurAffiliations = () => {
    const list = [
    {
        title: "Dr. A.P.J. Abdul Kalam Technical University",
        img: aktuLogo,
    },
    {
        title: "Government of Uttar Pradesh",
        img: govUpLogo,
    },
    {
        title: "Pharmacy Council of India",
        img: pciLogo,
    },
    {
        title: "Prof. Rajendra Singh (Rajju Bhaiya) University",
        img: rsuLogo,
    },
    {
        title: "Bar Council of India",
        img: bciLogo,
    },
    {
        title: "National Council for Teacher Education",
        img: ncteLogo,
    },
    {
        title: "State Council of Educational Research and Training ",
        img: scertLogo,
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