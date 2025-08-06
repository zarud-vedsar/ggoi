import React from "react";

import '../../Components/Website/assets/css/institutes-list.css';
import { Link } from "react-router-dom";

const logos = [
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghansyam Urvasi Law College" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi PG college" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Shri Sai Ram Industrial Training  Institute" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi Industrial Training Institute" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Shri Sai College of Pharmacy" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Pharmacy" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi College of Pharmacy" },



];

const InstitutesList = () => {
    return (
        <section className="py-5 institutes-section" style={{ background: '#890c25' }} >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-white">Institutes Under Ghanshyam Group</h2>
                    </div>


                    {logos.map((logo, index) => (
                        <div className="col-12 col-md-6 col-lg-4 am-card"  data-aos="fade-up" data-aos-delay="300" key={index}>

                            <div className="am-card">
                                <div className="image-wrapper">
                                    <img
                                        src={logo.img}
                                        alt={`Logo ${index + 1}`}
                                        className="object-contain mx-auto"
                                    />
                                    <div className="View-more-btn d-block w-100">
                                        <Link to="" className="am-f22" >View More</Link>
                                        <img src="website/img/arrow.svg" alt="" className="view-more-btn-arrow" />
                                    </div>
                                </div>
                                <p className="college-name text-center am-f25 text-white">{logo?.name}</p>

                            </div>

                        </div>
                    ))}


                </div>
            </div>

        </section>
    )
}

export default InstitutesList